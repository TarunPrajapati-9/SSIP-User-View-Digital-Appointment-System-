import { useState } from "react";
import { Dialog, Popover } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import ProfilePopover from "./Profile_PopOver";
import { Link, useLocation } from "react-router-dom";

export default function NavigationBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  return (
    <header className="bg-gray-200">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex">
          <Link to="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Digital Gujarat</span>
            <img
              className="h-10 w-auto  transition-transform hover:scale-110"
              src="/logo.png"
              alt="logo"
            />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex justify-center lg:gap-x-12">
          <Link
            to="/"
            className={`text-xl leading-6 font-serif font-black opacity-60 hover:opacity-100 ${
              location.pathname === "/" ? "opacity-100" : "opacity-60"
            }`}
          >
            Home
          </Link>

          <Link
            to="/history"
            className={`text-xl leading-6 font-serif font-black opacity-60 hover:opacity-100 ${
              location.pathname === "/history" ? "opacity-100" : "opacity-60"
            }`}
          >
            History
          </Link>
        </Popover.Group>
        <div className="hidden lg:flex lg:justify-end items-center gap-x-6">
          <ProfilePopover />
          <Link
            to="/login"
            className="text-sm font-serif  leading-6  cursor-pointer font-black opacity-60 hover:opacity-100"
            onClick={() => {
              localStorage.clear();
            }}
          >
            Log Out &rarr;
          </Link>
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-60 overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link to="/" className="-m-1.5 p-1.5">
              <img className="h-8 w-auto" src="/fingerprint.svg" alt="" />
            </Link>

            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <div className="flex space-x-1 justify-center items-center">
                  <ProfilePopover />
                </div>
                <Link
                  to="/"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Home
                </Link>
                <Link
                  to="/history"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  History
                </Link>
                <Link
                  to="/login"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  onClick={() => {
                    localStorage.clear();
                  }}
                >
                  Log Out
                </Link>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
