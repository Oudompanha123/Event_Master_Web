"use client"
import { Fragment, useState } from 'react'
import { Listbox, ListboxButton, ListboxOption, ListboxOptions, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon, XMarkIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'

const people = [
  {
    id: 1,
    name: 'Wade Cooper',
    avatar:
      'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 2,
    name: 'Arlene Mccoy',
    avatar:
      'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 3,
    name: 'Devon Webb',
    avatar:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80',
  },
  {
    id: 4,
    name: 'Tom Cook',
    avatar:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 5,
    name: 'Tanya Fox',
    avatar:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 6,
    name: 'Hellen Schmidt',
    avatar:
      'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 7,
    name: 'Caroline Schultz',
    avatar:
      'https://images.unsplash.com/photo-1568409938619-12e139227838?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 8,
    name: 'Mason Heaney',
    avatar:
      'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 9,
    name: 'Claudie Smitham',
    avatar:
      'https://images.unsplash.com/photo-1584486520270-19eca1efcce5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 10,
    name: 'Emil Schaefer',
    avatar:
      'https://images.unsplash.com/photo-1561505457-3bcad021f8ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Dropdown() {
  const [selected, setSelected] = useState([]); // Initialize as an array

  const handleSelectionChange = (person) => {
    if (selected.some((p) => p.id === person.id)) {
      setSelected(selected.filter((p) => p.id !== person.id));
    } else if (selected.length < 2) {
      setSelected([...selected, person]);
    }
  };

  const removeSelection = (person) => {
    setSelected(selected.filter((p) => p.id !== person.id));
  };

  return (
    <Listbox value={selected} onChange={() => {}}>
      {({ open }) => (
        <>
          <div className="relative">
            <ListboxButton className="relative h-[42px] cursor-default rounded-xl bg-white pl-2 w-[150px] pr-8 text-left text-black ring-1 ring-inset ring-gray-200 focus:outline-none sm:text-sm sm:leading-6">
              <span className="flex items-center gap-2">
                {selected.map((person) => (
                  <span key={person.id} className="flex items-center gap-2 py-[1px] rounded-xl">
                    <img src={person.avatar} alt="" className="h-5 w-5 ml-1 rounded-full " />
                    {/* <span className=" block truncate">{person.name}</span> */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        removeSelection(person);
                      }}
                      className=" text-gray-500 hover:text-gray-700 mr-1 "
                    >
                      <XMarkIcon className="h-5 w-5 " aria-hidden="true" />
                    </button>
                  </span>
                ))}
              </span>
              <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                <Image
                className=""
                src="/icons/dropdown.svg"
                alt="Location"
                width={15}
                height={25}
                priority
              />
              </span>
            </ListboxButton>

            <Transition show={open} leave="transition ease-in duration-100" leaveFrom="opacity-100" leaveTo="opacity-0">
              <ListboxOptions className="absolute z-50 mt-1 max-h-56 overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {people.map((person) => (
                  <ListboxOption
                    key={person.id}
                    className={({ focus }) =>
                      classNames(
                        focus ? 'bg-blue-400 text-white' : '',
                        !focus ? 'text-gray-900' : '',
                        'relative cursor-default select-none py-2 pl-3 pr-9'
                      )
                    }
                    value={person}
                    onClick={() => handleSelectionChange(person)}
                  >
                    {({ selected, focus }) => (
                      <>
                        <div className="flex items-center gap-3">
                          <input
                            type="checkbox"
                            checked={selected}
                            onChange={() => handleSelectionChange(person)}
                            className="h-3 w-3 rounded-xl"
                          />
                          <img src={person.avatar} alt="" className="h-5 w-5 flex-shrink-0 rounded-full" />
                          <span
                            className={classNames(selected ? 'font-semibold' : 'font-normal', 'ml-2 block truncate')}
                          >
                            {person.name}
                          </span>
                        </div>

                        {selected ? (
                          <span
                            className={classNames(
                              focus ? 'text-white' : 'text-indigo-600',
                              ' relative inset-y-0 right-0 flex items-center pr-4'
                            )}
                          >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </ListboxOption>
                ))}
              </ListboxOptions>
            </Transition>
          </div>
        </>
      )}
    </Listbox>
  )
}
