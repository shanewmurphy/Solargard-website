"use client";

import { useState, useRef } from "react";
import { Popover } from "@headlessui/react";
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
} from "@heroicons/react/20/solid";

import {
  ArrowPathIcon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
} from "@heroicons/react/24/outline";

const windowFilms = [
  {
    name: "Solar Films",
    description: "Get a better understanding of your traffic",
    href: "#",
    icon: ChartPieIcon,
  },
  {
    name: "Engagement",
    description: "Speak directly to your customers",
    href: "#",
    icon: CursorArrowRaysIcon,
  },
  {
    name: "Security",
    description: "Your customers' data will be safe and secure",
    href: "#",
    icon: FingerPrintIcon,
  },
];

const callsToAction = [
  { name: "Watch demo", href: "#", icon: PlayCircleIcon },
  { name: "Contact sales", href: "#", icon: PhoneIcon },
];

export default function DesktopFlyoutMenu() {
  let [isOpen, setIsOpen] = useState(false);
  const timeoutRef = useRef(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 200); // 200ms delay
  };

  return (
    <Popover className="relative antialiased">
      {({ open }) => (
        <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <Popover.Button className="inline-flex items-center gap-x-1 text-base font-semibold text-secondary">
            <span>Window Films</span>
            <ChevronDownIcon aria-hidden="true" className="size-5" />
          </Popover.Button>

          {isOpen && (
            <Popover.Panel
              static
              className="absolute left-1/2 z-10 mt-5 flex w-screen max-w-max -translate-x-1/2 px-4 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
            >
              <div className="w-screen max-w-md flex-auto overflow-hidden rounded-3xl bg-white text-base shadow-lg ring-1 ring-gray-900/5">
                <div className="p-4">
                  {windowFilms.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex gap-x-4 rounded-lg p-4 hover:bg-gray-50"
                    >
                      <div>
                        <a
                          href={item.href}
                          className="font-semibold text-gray-900"
                        >
                          {item.name}
                          <span className="absolute inset-0" />
                        </a>
                        <p className="mt-1 text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Popover.Panel>
          )}
        </div>
      )}
    </Popover>
  );
}
