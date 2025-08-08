import React, { useEffect, useState } from 'react';

export const WeatherWidget = ({ lat = 10.762622, lon = 106.660172 }) => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWeather = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`
        );
        const data = await res.json();
        setWeather(data.current_weather);
      } catch (error) {
        console.error('Weather API error:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, [lat, lon]);

  if (loading) return <div>Loading weather...</div>;
  if (!weather) return <div>Không có dữ liệu thời tiết</div>;

  return (
    <div className="p-4 rounded shadow bg-white text-black w-fit">
      <h2 className="font-semibold text-lg mb-1">🌤️ Thời tiết hiện tại</h2>
      <p>Nhiệt độ: {weather.temperature}°C</p>
      <p>Gió: {weather.windspeed} km/h</p>
      <p>Thời gian: {new Date(weather.time).toLocaleString()}</p>
    </div>
  );
};
