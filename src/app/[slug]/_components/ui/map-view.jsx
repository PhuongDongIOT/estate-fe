'use client';

import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import * as turf from '@turf/turf';
import MapboxDirections from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions';

import { WeatherWidget } from './weather-widget.jsx';
import { MapStyleDropdown } from './map-style-dropdown.jsx';

import 'mapbox-gl/dist/mapbox-gl.css';

const mapStyles = {
  Standard: 'mapbox://styles/mapbox/standard',
  Streets: 'mapbox://styles/mapbox/streets-v12',
  Satellite: 'mapbox://styles/mapbox/satellite-v9',
  Light: 'mapbox://styles/mapbox/light-v11',
  Dark: 'mapbox://styles/mapbox/dark-v11'
};

const token_mapbox = process.env.NEXT_PUBLIC_MAPBOX_TOKEN || '';

function calculateSpeedByTurf(from, to, timeDiffSeconds) {
  const fromPoint = turf.point(from);
  const toPoint = turf.point(to);
  const distanceKm = turf.distance(fromPoint, toPoint, { units: 'kilometers' });
  return distanceKm / (timeDiffSeconds / 3600); // km/h
}

export const MapView = () => {
  const [mapStyle, setMapStyle] = useState(mapStyles.Standard);
  const [speed, setSpeed] = useState(0);
  const mapContainerRef = useRef(null);
  const mapRef = useRef(null);
  const markerRef = useRef(null);
  const divRef = useRef(null);
  const routeRef = useRef([]);

  useEffect(() => {
    mapboxgl.accessToken = token_mapbox;

    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: mapStyle,
      center: [106.70098, 10.9275],
      zoom: 20,
      pitch: 80,
      bearing: 0,
      antialias: true,
      dragRotate: true,
      touchZoomRotate: true
    });

    const directions = new MapboxDirections({
      accessToken: mapboxgl.accessToken,
      unit: 'metric',
      profile: 'mapbox/driving'
    });

    mapRef.current = map;
    mapRef.current.setConfigProperty('basemap', 'lightPreset', 'dusk');
    mapRef.current.addControl(directions, 'bottom-left');

    mapRef.current.addControl(
      new mapboxgl.NavigationControl({
        visualizePitch: true
      }),
      'bottom-right'
    );
    mapRef.current.addControl(new mapboxgl.GeolocateControl(), 'top-left');
    mapRef.current.addControl(
      new mapboxgl.ScaleControl({ maxWidth: 100, unit: 'metric' }),
      'bottom-left'
    );

    const start = [106.70098, 10.9275];
    const end = [106.7025, 10.9287];

    mapRef.current.on('load', () => {
      const zoomBasedReveal = (value) => {
        return ['interpolate', ['linear'], ['zoom'], 11, 0.0, 13, value];
      };

      map.setSnow({
        density: zoomBasedReveal(0.85),
        intensity: 1.0,
        'center-thinning': 0.1,
        direction: [0, 50],
        opacity: 1.0,
        color: `#ffffff`,
        'flake-size': 0.71,
        vignette: zoomBasedReveal(0.3),
        'vignette-color': `#ffffff`
      });

      fetch(
        `https://api.mapbox.com/directions/v5/mapbox/driving/${start.join(',')};${end.join(',')}?geometries=geojson&access_token=${token_mapbox}`
      )
        .then((res) => res.json())
        .then((data) => {
          const geometry = data.routes[0].geometry;

          if (map.getSource('route')) {
            map.getSource('route').setData({
              type: 'Feature',
              geometry
            });
          } else {
            map.addSource('route', {
              type: 'geojson',
              data: {
                type: 'Feature',
                geometry
              }
            });

            map.addLayer({
              id: 'route',
              type: 'line',
              source: 'route',
              layout: { 'line-cap': 'round', 'line-join': 'round' },
              paint: {
                'line-color': '#007bff',
                'line-width': 6
              }
            });
          }

          mapRef.current.addSource('model', {
            type: 'geojson',
            data: {
              type: 'Feature',
              properties: {
                'model-uri': 'https://docs.mapbox.com/mapbox-gl-js/assets/tower.glb'
              },
              geometry: {
                coordinates: [106.7025, 10.9287],
                type: 'Point'
              }
            }
          });

          mapRef.current.addLayer({
            id: 'tower',
            type: 'model',
            slot: 'middle',
            source: 'model',
            minzoom: 15,
            layout: {
              'model-id': ['get', 'model-uri']
            },
            paint: {
              'model-opacity': 1,
              'model-rotation': [0.0, 0.0, 35.0],
              'model-scale': [0.2, 0.2, 0.2],
              'model-color-mix-intensity': 0,
              'model-cast-shadows': true,
              'model-emissive-strength': 0.8
            }
          });

          const route = geometry.coordinates;
          routeRef.current = route;

          const marker = new mapboxgl.Marker({ color: '#FF0000' }).setLngLat(route[0]).addTo(map);
          markerRef.current = marker;

          let step = 0;
          let direction = 1;
          let lastTime = Date.now();
          let lastCoord = route[0];

          const animate = () => {
            const nextStep = step + direction;
            if (nextStep < 0 || nextStep >= route.length) {
              direction *= -1;
              requestAnimationFrame(animate);
              return;
            }

            const start = route[step];
            const end = route[nextStep];
            let progress = 0;
            const delta = 0.01;

            const animateStep = () => {
              if (progress >= 1) {
                step += direction;
                animate();
                return;
              }

              const lng = start[0] + (end[0] - start[0]) * progress;
              const lat = start[1] + (end[1] - start[1]) * progress;
              const newCoord = [lng, lat];

              marker.setLngLat(newCoord);
              map.easeTo({
                center: newCoord,
                bearing: calculateBearing(start, end),
                pitch: 80,
                zoom: 20,
                duration: 50
              });

              const now = Date.now();
              const dt = (now - lastTime) / 1000;
              const speedNow = calculateSpeedByTurf(lastCoord, newCoord, dt);
              setSpeed(speedNow.toFixed(1));

              lastTime = now;
              lastCoord = newCoord;

              progress += delta;
              requestAnimationFrame(animateStep);
            };

            animateStep();
          };

          // animate();
        });
    });

    return () => {
      map.remove();
    };
  }, [mapStyle]);

  const handleFullscreen = () => {
    if (divRef.current) {
      if (divRef.current.requestFullscreen) {
        divRef.current.requestFullscreen();
      } else if (divRef.current.webkitRequestFullscreen) {
        divRef.current.webkitRequestFullscreen(); // Safari
      } else if (divRef.current.msRequestFullscreen) {
        divRef.current.msRequestFullscreen(); // IE/Edge
      }
    }
  };

  return (
    <div
      ref={divRef}
      className="h-screen w-full overflow-hidden relative"
      onDoubleClick={handleFullscreen}
    >
      <div ref={mapContainerRef} style={{ height: '100vh', width: '100%' }} />
      <div className="absolute top-2 left-12 bg-black/40 text-white px-4 py-2 rounded shadow text-sm z-50">
        🚗 Tốc độ: {speed} km/h
      </div>
      <div className="absolute top-2 right-12 bg-black/40 text-white px-4 py-2 rounded shadow text-sm z-50">
        <WeatherWidget lat={10.762622} lon={106.660172} />
      </div>
      <MapStyleDropdown mapStyle={mapStyle} setMapStyle={setMapStyle} mapStyles={mapStyles} />
    </div>
  );
};

function calculateBearing(from, to) {
  const [lng1, lat1] = from.map((d) => (d * Math.PI) / 180);
  const [lng2, lat2] = to.map((d) => (d * Math.PI) / 180);

  const y = Math.sin(lng2 - lng1) * Math.cos(lat2);
  const x =
    Math.cos(lat1) * Math.sin(lat2) - Math.sin(lat1) * Math.cos(lat2) * Math.cos(lng2 - lng1);

  const bearing = Math.atan2(y, x) * (180 / Math.PI);
  return (bearing + 360) % 360;
}
