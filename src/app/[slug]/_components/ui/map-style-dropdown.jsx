import { Listbox, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { ChevronUpDownIcon } from '@heroicons/react/20/solid';

const styles = {
  wrapper: 'absolute bottom-72 right-2 z-50 w-32',
  button:
    'relative w-full cursor-default rounded-lg bg-white/90 backdrop-blur-md py-2 pl-4 pr-10 text-left shadow-lg ring-1 ring-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-sm font-medium text-gray-800',
  options:
    'absolute mt-1 max-h-60 w-full overflow-auto rounded-lg bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm',
  option: (active) =>
    `relative cursor-default select-none py-2 pl-10 pr-4 ${
      active ? 'bg-blue-100 text-blue-900' : 'text-gray-900'
    }`,
  selectedIcon: 'absolute inset-y-0 left-0 flex items-center pl-3 text-blue-600'
};

export function MapStyleDropdown({ mapStyle, setMapStyle, mapStyles }) {
  return (
    <div className={styles.wrapper}>
      <Listbox value={mapStyle} onChange={setMapStyle}>
        <div className="relative">
          <Listbox.Button className={styles.button}>
            <span className="block truncate">
              {Object.entries(mapStyles).find(([_, url]) => url === mapStyle)?.[0]}
            </span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <ChevronUpDownIcon className="h-5 w-5 text-gray-400" />
            </span>
          </Listbox.Button>

          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
            enter="transition ease-out duration-100"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
          >
            <Listbox.Options className={styles.options}>
              {Object.entries(mapStyles).map(([label, url]) => (
                <Listbox.Option key={url} value={url}>
                  {({ selected, active }) => (
                    <div className={styles.option(active)}>
                      <span
                        className={`block truncate ${selected ? 'font-semibold' : 'font-normal'}`}
                      >
                        {label}
                      </span>
                      {selected ? <span className={styles.selectedIcon}>✔</span> : null}
                    </div>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
}
