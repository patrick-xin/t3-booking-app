import { Listbox, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { HiCheck } from "react-icons/hi";
import { HiChevronUpDown } from "react-icons/hi2";
import Flex from "./Flex";

interface Props {
  selected: string;
  onChange: (value: string) => void;
  values: string[];
  label: string;
}

const Select = ({ selected, onChange, values, label }: Props) => {
  return (
    <div className="z-40">
      <Listbox value={selected} onChange={onChange}>
        <div className="relative">
          <Flex align="center">
            <Listbox.Label>{label}</Listbox.Label>
            <Listbox.Button className="relative w-32 cursor-default rounded-lg bg-primary-gray py-2 pl-3 pr-10 text-left shadow-md focus:outline-none">
              <span className="block capitalize">{selected}</span>
              <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                <HiChevronUpDown
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </span>
            </Listbox.Button>
          </Flex>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-primary-gray py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {values.map((s, index) => (
                <Listbox.Option
                  key={index}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-6 pr-4 ${
                      active ? "hover:bg-white/10" : "text-gray-300"
                    }`
                  }
                  value={s}
                >
                  {({ selected }) => (
                    <>
                      <span className={`ml-4 block truncate capitalize`}>
                        {s}
                      </span>
                      {selected ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                          <HiCheck className="h-5 w-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
};

export default Select;
