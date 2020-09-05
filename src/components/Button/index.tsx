import React from 'react';

interface Props {
  variant?: 'primary' | 'secondary' | 'outline';
  children: React.ReactChild;
}
const Button: React.FC<Props> = ({ variant, children }) => {
  switch (variant) {
    case 'outline':
      return (
        <button
          type="button"
          className="inline-flex items-center px-6 py-3 border border-gray-300 text-base leading-6 font-medium rounded-md text-gray-700 bg-white hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:text-gray-800 active:bg-gray-50 transition ease-in-out duration-150"
        >
          {children}
        </button>
      );
    case 'secondary':
      return (
        <button
          type="button"
          className="inline-flex items-center px-6 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-50 focus:outline-none focus:border-indigo-300 focus:shadow-outline-indigo active:bg-indigo-200 transition ease-in-out duration-150"
        >
          {children}
        </button>
      );
    default:
      return (
        <button
          type="button"
          className="inline-flex items-center px-6 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150"
        >
          {children}
        </button>
      );
  }
};

export default Button;
