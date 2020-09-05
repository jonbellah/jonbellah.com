import React from 'react';
import { Link } from 'gatsby';

import { PaginationContext } from 'lib/types';

interface Props {
  pageContext: PaginationContext;
}

const Pagination: React.FC<Props> = ({ pageContext }) => {
  const { currentPage, numPages } = pageContext;
  const isFirst = currentPage === 1;
  const isLast = currentPage === numPages;
  const prevPage =
    currentPage - 1 === 1
      ? '/articles'
      : `/articles/${(currentPage - 1).toString()}`;
  const nextPage = `/articles/${(currentPage + 1).toString()}`;
  const numberClass = (page: number): string =>
    currentPage === page
      ? '-mt-px border-t-2 border-indigo-500 pt-4 px-4 inline-flex items-center text-sm leading-5 font-medium text-indigo-600 focus:outline-none focus:text-indigo-800 focus:border-indigo-700 transition ease-in-out duration-150'
      : '-mt-px border-t-2 border-transparent pt-4 px-4 inline-flex items-center text-md leading-5 font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-400 transition ease-in-out duration-150';

  return (
    <nav
      className="border-t border-gray-200 px-4 flex items-center justify-between sm:px-0 max-w-3xl mx-auto w-full pb-24"
      // hack to get around https://github.com/tailwindlabs/tailwindcss/issues/2330
      style={{ marginTop: '-4rem' }}
    >
      <ul className="flex w-full">
        {!isFirst ? (
          <li className="w-0 flex-1 flex">
            <Link
              to={prevPage}
              rel="prev"
              className="-mt-px border-t-2 border-transparent pt-4 pr-1 inline-flex items-center text-md leading-5 font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-400 transition ease-in-out duration-150"
            >
              <svg
                className="mr-3 h-5 w-5 text-gray-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
                  clipRule="evenodd"
                />
              </svg>
              Previous
            </Link>
          </li>
        ) : (
          <li className="w-0 flex-1 flex">&nbsp;</li>
        )}
        {Array.from({ length: numPages }, (_, i) => (
          <li
            key={`pagination-number${i + 1}`}
            style={{
              margin: 0,
            }}
          >
            <Link
              to={`/articles/${i === 0 ? '' : i + 1}`}
              className={numberClass(i + 1)}
            >
              {i + 1}
            </Link>
          </li>
        ))}
        {!isLast ? (
          <li className="w-0 flex-1 flex justify-end">
            <Link
              to={nextPage}
              rel="next"
              className="-mt-px border-t-2 border-transparent pt-4 pl-1 inline-flex items-center text-md leading-5 font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-400 transition ease-in-out duration-150"
            >
              Next
              <svg
                className="ml-3 h-5 w-5 text-gray-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </li>
        ) : (
          <li className="w-0 flex-1 flex">&nbsp;</li>
        )}
      </ul>
    </nav>
  );
};

export default Pagination;
