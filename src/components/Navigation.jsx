import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const navigation = [
  { name: "Upload", href: "/", current: true },
  { name: "View Files", href: "/#files", current: false },
  { name: "Share", href: "/share", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function scrollToSection() {
  const element = document.getElementById("files");
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
}

const Navigation = () => {
  return (
    <Disclosure
      as="nav"
      className="backdrop-blur-md bg-gradient-to-r from-[#0f0c29aa] via-[#302b63aa] to-[#24243eaa] shadow-lg border-b border-white/10 rounded-b-xl"
    >
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-white/10 hover:text-cyan-300 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center space-x-2 overflow-hidden">
                  <Link to="/">
                    <img
                      className="h-8 w-auto"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX4AZgnpFZW6X3jqVQodZXuDmTgLhrEU7cWAetY9d0mdPRP0PG-YLNXcnDmJqg5cNcavM&usqp=CAU"
                      alt="Your Company"
                    />
                  </Link>
                  <Link to="/">
                    <span className="text-xl sm:text-2xl lg:text-3xl text-white font-bold truncate max-w-[100px] sm:max-w-none">
                      P2P Sharing
                    </span>
                  </Link>
                </div>

                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    <Link
                      key="hahha"
                      to="/"
                      className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-xl font-semibold"
                    >
                      Home
                    </Link>
                    <Link
                      key="21"
                      to="/#files"
                      onClick={scrollToSection}
                      className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-xl font-semibold"
                    >
                      Files
                    </Link>
                    <Link
                      key="ss"
                      to="/share"
                      className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-xl font-semibold"
                    >
                      Share
                    </Link>
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <Link
                  to="/notifications"
                  className="relative rounded-full p-1 text-white hover:text-cyan-300 transition duration-200"
                >
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </Link>

                <Menu as="div" className="relative ml-1">
                  <div>
                    <Menu.Button className="relative flex rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8 rounded-full"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN28tC-mOTvBaKGSykrFjHen9j0-vLfHUn9Q&s"
                        alt=""
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white/90 py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? "bg-purple-100" : "",
                              "block px-4 py-2 text-sm text-gray-800"
                            )}
                          >
                            Your Profile
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? "bg-purple-100" : "",
                              "block px-4 py-2 text-sm text-gray-800"
                            )}
                          >
                            Settings
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? "bg-purple-100" : "",
                              "block px-4 py-2 text-sm text-gray-800"
                            )}
                          >
                            Sign out
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-white/10 text-white"
                      : "text-white hover:text-cyan-300 hover:bg-white/10",
                    "block rounded-md px-3 py-2 text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Navigation;
