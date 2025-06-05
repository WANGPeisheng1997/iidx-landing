import React, { Fragment } from 'react';

import { Popover, Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { Link } from 'react-scroll';

import config from '../config/index.json';

const Menu = () => {
  const { navigation, company, callToAction } = config;
  const { name: companyName } = company;

  return (
    <>
      <Popover>
        <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
          <nav
            className="relative flex items-center justify-between sm:h-10"
            aria-label="Global"
          >
            <div className="flex items-center flex-grow flex-shrink-0">
              <div className="flex items-center justify-between w-full">
                <a href="#">
                  <span className="sr-only">{companyName}</span>
                  <span className="text-2xl font-bold text-gray-900"></span>
                </a>
                <div className="flex items-center">
                  <Popover.Button className="custom-menu-button bg-background rounded-md p-2 inline-flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-inset focus:ring-secondary">
                    <span className="sr-only">Open main menu</span>
                    <MenuIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
            </div>
          </nav>
        </div>

        <Transition
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            focus
            className="absolute z-10 top-0 right-0 p-2 transition transform origin-top-right w-80 max-w-sm"
          >
            <div className="custom-menu-panel rounded-lg shadow-md ring-1 ring-black ring-opacity-5 overflow-hidden">
              <div className="px-5 pt-4 flex items-center justify-between">
                <div>
                  <span className="text-xl font-bold text-white">
                    TTW PRO LEAGUE
                  </span>
                </div>
                <div className="-mr-2">
                  <Popover.Button className="custom-menu-close-button bg-transparent rounded-md p-2 inline-flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Close main menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navigation.map((item) => (
                  <Link
                    spy={true}
                    active="active"
                    smooth={true}
                    duration={1000}
                    key={item.name}
                    to={item.href}
                    className="custom-menu-link block px-3 py-2 rounded-md text-base font-medium"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <Link
                spy={true}
                active="active"
                smooth={true}
                duration={1000}
                to={callToAction.href.replace('#', '')}
                className="custom-menu-cta block w-full px-5 py-3 text-center font-medium"
              >
                {callToAction.text}
              </Link>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    </>
  );
};

export default Menu;
