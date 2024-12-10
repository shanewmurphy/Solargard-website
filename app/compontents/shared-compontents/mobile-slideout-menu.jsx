"use client";

import { useState } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
  TransitionChild,
} from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";

export default function MobileSlideMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <div>
        <button
          className="font-bold text-lg text-secondary flex items-center"
          onClick={() => setOpen(true)}
        >
          Menu
        </button>
      </div>
      <Dialog open={open} onClose={setOpen} className="relative z-30">
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-gray-500/75 transition-opacity duration-500 ease-in-out data-[closed]:opacity-0"
        />
        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <DialogPanel
                transition
                className="pointer-events-auto relative w-screen max-w-md transform transition duration-500 ease-in-out data-[closed]:translate-x-full sm:duration-700"
              >
                <TransitionChild>
                  <div className="absolute right-0 top-0 -ml-8 flex pr-2 pt-4 duration-500 ease-in-out data-[closed]:opacity-0 sm:-ml-10 sm:pr-4">
                    <button
                      type="button"
                      onClick={() => setOpen(false)}
                      className="relative text-4xl rounded-full bg-slate-100 p-2 text-gray-600 hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-white"
                    >
                      <span className="absolute -inset-2.5" />
                      <span className="sr-only">Close panel</span>
                      <XMarkIcon aria-hidden="true" className="size-8" />
                    </button>
                  </div>
                </TransitionChild>
                <div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
                  <div className="px-4 sm:px-6">
                    <DialogTitle className="text-base font-semibold text-gray-900">
                      Panel title
                    </DialogTitle>
                  </div>
                  <div className="relative mt-12 flex-1 px-4 sm:px-6 antialiased">
                    <div>
                      <button className="text-xl font-semibold rounded-md w-full text-left p-2 pl-4 hover:bg-zinc-100">
                        Solar Films
                      </button>
                    </div>
                    <div className="mt-2">
                      <button className="text-xl font-semibold rounded-md w-full text-left p-2 pl-4 hover:bg-zinc-100">
                        Privacy Films
                      </button>
                    </div>
                    <div className="mt-2">
                      <button className="text-xl font-semibold rounded-md w-full text-left p-2 pl-4 hover:bg-zinc-100">
                        Safety Films
                      </button>
                    </div>
                  </div>
                </div>
              </DialogPanel>
            </div>
          </div>
        </div>
      </Dialog>
    </div>
  );
}
