import React from 'react';

interface Props {
  color?:
    | 'gray'
    | 'red'
    | 'orange'
    | 'yellow'
    | 'green'
    | 'teal'
    | 'blue'
    | 'indigo'
    | 'purple'
    | 'pink';
  children: React.ReactChild;
}

const Pill: React.FC<Props> = ({ color, children }) => {
  switch (color) {
    case 'red':
      return (
        <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium leading-5 bg-red-100 text-red-800">
          {children}
        </span>
      );
    case 'orange':
      return (
        <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium leading-5 bg-orange-100 text-orange-800">
          {children}
        </span>
      );
    case 'green':
      return (
        <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium leading-5 bg-green-100 text-green-800">
          {children}
        </span>
      );
    case 'teal':
      return (
        <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium leading-5 bg-teal-100 text-teal-800">
          {children}
        </span>
      );
    case 'blue':
      return (
        <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium leading-5 bg-blue-100 text-blue-800">
          {children}
        </span>
      );
    case 'indigo':
      return (
        <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium leading-5 bg-indigo-100 text-indigo-800">
          {children}
        </span>
      );
    case 'purple':
      return (
        <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium leading-5 bg-purple-100 text-purple-800">
          {children}
        </span>
      );
    case 'pink':
      return (
        <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium leading-5 bg-pink-100 text-pink-800">
          {children}
        </span>
      );
    default:
      return (
        <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium leading-5 bg-gray-100 text-gray-800">
          {children}
        </span>
      );
  }
};

export default Pill;
