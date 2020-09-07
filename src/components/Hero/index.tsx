import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative bg-white overflow-hidden">
      <main className="mt-10 mx-auto max-w-screen-xl px-4 pb-20 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 xl:mt-28">
        <div className="text-center">
          <h2 className="text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl">
            Hi, I&apos;m{' '}
            <span className="text-blue-600 inline-block">Jon</span>
          </h2>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-xl">
            I am a software engineer, teacher, speaker, and occasional writer
            living in Denver, Colorado.
          </p>
        </div>
      </main>
    </div>
  );
};

export default Hero;
