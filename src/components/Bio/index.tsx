import React from 'react';

const Bio: React.FC = () => (
  <div className="flex flex-wrap items-center justify-center sm:justify-left border-t border-gray-200 w-full pt-10 sm:px-1 max-w-3xl mx-auto">
    <figure className="px-2 mb-1 sm:mb-0 w-full sm:w-1/5 flex justify-center">
      <img
        itemProp="image"
        src="/images/avatar.jpg"
        alt="Jon Bellah"
        className="rounded-full p-4 sm:p-0"
      />
    </figure>
    <div className="px-4 sm:w-4/5 text-center sm:text-left">
      <h4 className="font-sans font-bold text-lg sm:text-xl mb-2">
        <span className="text-black hover:text-gray-600 capitalize border-b-2 border-transparent transition-colors duration-300">
          Jon Bellah
        </span>
      </h4>
      <p className="text-gray-500 prose">
        I am a software engineer, teacher, speaker, and occasional writer. I
        live in the beautiful city of Denver, Colorado. You can follow me on
        Twitter at <a href="https://twitter.com/jonbellah">@jonbellah</a>.
      </p>
    </div>
  </div>
);

export default Bio;
