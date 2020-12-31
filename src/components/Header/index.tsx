import React from 'react';
import Link from 'gatsby-link';

import Logo from 'assets/images/Logo';

const Header: React.FC = () => {
  const [expanded, setExpanded] = React.useState(false);

  return (
    <header className="relative">
      <div className="flex justify-between items-center px-4 py-6 sm:px-6 md:justify-start max-w-5xl mx-auto lg:max-w-7xl">
        <div>
          <Link
            to="/"
            className="flex text-gray-800 hover:text-blue-600 transition duration-500 ease-in-out"
          >
            <Logo className="h-10 w-10" />
          </Link>
        </div>
        <div className="-mr-2 -my-2 md:hidden">
          <button
            onClick={() => setExpanded(true)}
            type="button"
            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
        <div
          className="hidden md:flex-1 md:flex md:items-center md:justify-between"
          style={{ paddingRight: '40px' }}
        >
          <nav className="flex space-x-10 flex-1">
            <div className="relative text-center w-full">
              <Link
                to="/articles"
                className="inline-block px-5 py-2 text-base leading-6 font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition ease-in-out duration-150"
              >
                Articles
              </Link>
              <Link
                to="/courses"
                className="inline-block px-5 py-2 text-base leading-6 font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition ease-in-out duration-150"
              >
                Courses
              </Link>
              <Link
                to="/speaking"
                className="inline-block px-5 py-2 text-base leading-6 font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition ease-in-out duration-150"
              >
                Speaking
              </Link>
              <Link
                to="/uses"
                className="inline-block px-5 py-2 text-base leading-6 font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition ease-in-out duration-150"
              >
                Uses
              </Link>
              <Link
                to="/contact"
                className="inline-block px-5 py-2 text-base leading-6 font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition ease-in-out duration-150"
              >
                Contact
              </Link>
            </div>
          </nav>
        </div>
      </div>

      {expanded && (
        <div className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden z-50">
          <div className="rounded-lg shadow-lg w-1/2  bg-white ml-auto">
            <div className="rounded-lg shadow-xs divide-y-2 divide-gray-50">
              <div className="pt-4 pb-6 px-4 space-y-6">
                <div className="flex items-center justify-between">
                  <div className="text-gray-800 hover:text-blue-600"></div>
                  <div className="-mr-2">
                    <button
                      onClick={() => setExpanded(!expanded)}
                      type="button"
                      className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                    >
                      <svg
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <div>
                  <nav className="grid gap-6">
                    <Link
                      to="/articles"
                      onClick={() => setExpanded(false)}
                      className="-m-3 p-3 flex items-center space-x-4 rounded-lg hover:bg-gray-50 transition ease-in-out duration-150"
                    >
                      <div className="text-base text-right w-full leading-6 font-medium text-gray-900">
                        Articles
                      </div>
                    </Link>
                    <Link
                      to="/courses"
                      onClick={() => setExpanded(false)}
                      className="-m-3 p-3 flex items-center space-x-4 rounded-lg hover:bg-gray-50 transition ease-in-out duration-150"
                    >
                      <div className="text-base text-right w-full leading-6 font-medium text-gray-900">
                        Courses
                      </div>
                    </Link>

                    <Link
                      to="/speaking"
                      onClick={() => setExpanded(false)}
                      className="-m-3 p-3 flex items-center space-x-4 rounded-lg hover:bg-gray-50 transition ease-in-out duration-150"
                    >
                      <div className="text-base text-right w-full leading-6 font-medium text-gray-900">
                        Speaking
                      </div>
                    </Link>

                    <Link
                      to="/uses"
                      onClick={() => setExpanded(false)}
                      className="-m-3 p-3 flex items-center space-x-4 rounded-lg hover:bg-gray-50 transition ease-in-out duration-150"
                    >
                      <div className="text-base text-right w-full leading-6 font-medium text-gray-900">
                        Uses
                      </div>
                    </Link>

                    <Link
                      to="/contact"
                      onClick={() => setExpanded(false)}
                      className="-m-3 p-3 flex items-center space-x-4 rounded-lg hover:bg-gray-50 transition ease-in-out duration-150"
                    >
                      <div className="text-base text-right w-full leading-6 font-medium text-gray-900">
                        Contact
                      </div>
                    </Link>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
