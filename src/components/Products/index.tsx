import React from 'react';

import BugCatcherLogo from 'assets/images/BugCatcherLogo';
import JSFLogo from 'assets/images/JSFLogo';

const Products: React.FC = () => {
  return (
    <div className="bg-white">
      <div className="mx-auto py-12 px-4 max-w-screen-xl sm:px-6 lg:px-8 lg:py-24">
        <div className="space-y-12 lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0">
          <div className="space-y-5 sm:space-y-4 py-6">
            <h2 className="text-3xl leading-9 font-extrabold tracking-tight sm:text-4xl">
              Here&apos;s what I&apos;m working on
            </h2>
            <p className="text-xl leading-7 text-gray-500">
              When I&apos;m not slingin&apos; code for TED, I&apos;m usually
              working on one of these two projects.
            </p>
          </div>
          <div className="lg:col-span-2">
            <ul className="space-y-12 sm:grid sm:grid-cols-2 sm:col-gap-6 sm:row-gap-12 sm:space-y-0 lg:col-gap-8">
              <li>
                <div className="space-y-4 sm:p-6">
                  <a
                    href="https://jsfoundry.dev"
                    className="block rounded bg-gray-200 text-gray-600 relative py-16 px-8 flex items-center justify-center hover:text-blue-600 transition duration-500 ease-in-out"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <JSFLogo />
                  </a>
                  <div className="text-lg leading-6 font-medium space-y-1">
                    <h4>JSFoundry</h4>
                    <a
                      href="https://jsfoundry.dev"
                      className="text-blue-600"
                      target="_blank"
                      rel="noreferrer"
                    >
                      jsfoundry.dev
                    </a>
                  </div>
                  <div className="text-lg leading-7">
                    <p className="text-gray-500">
                      Courses and tutorials focused on making complex JavaScript
                      concepts easy to understand.
                    </p>
                  </div>

                  <ul className="flex space-x-5">
                    <li>
                      <a
                        href="https://twitter.com/jsfoundrydev"
                        className="text-gray-400 hover:text-gray-500 transition ease-in-out duration-150"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <span className="sr-only">Twitter</span>
                        <svg
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                        </svg>
                      </a>
                    </li>
                  </ul>
                </div>
              </li>

              <li>
                <div className="space-y-4 sm:p-6">
                  <a
                    href="https://bugcatcher.io"
                    className="block rounded bg-gray-200 text-gray-600 relative py-16 px-8 flex items-center justify-center hover:text-blue-600 transition duration-500 ease-in-out"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <BugCatcherLogo />
                  </a>
                  <div className="text-lg leading-6 font-medium space-y-1">
                    <h4>BugCatcher</h4>
                    <a
                      href="https://bugcatcher.io"
                      className="text-blue-600"
                      target="_blank"
                      rel="noreferrer"
                    >
                      bugcatcher.io
                    </a>
                  </div>
                  <div className="text-lg leading-7">
                    <p className="text-gray-500">
                      Frictionless frontend feedback for the whole team.
                    </p>
                  </div>

                  <ul className="flex space-x-5">
                    <li>
                      <a
                        href="https://twitter.com/bugcatcherio"
                        className="text-gray-400 hover:text-gray-500 transition ease-in-out duration-150"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <span className="sr-only">Twitter</span>
                        <svg
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                        </svg>
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
