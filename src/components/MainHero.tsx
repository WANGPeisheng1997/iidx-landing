import React from 'react';

import config from '../config/index.json';

const MainHero = () => {
  const { mainHero } = config;
  return (
    <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
      {/* Hero Image */}
      <div className="w-full max-w-none mb-8 sm:mb-12">
        <img
          src={mainHero.img}
          alt="TPLS2 Logo"
          className="w-full h-auto object-contain max-w-full"
        />
      </div>

      <div className="text-center">
        <p className="text-base text-gray-600 sm:text-lg sm:max-w-3xl sm:mx-auto md:text-xl">
          {mainHero.description}
        </p>
        <div className="mt-5 sm:mt-8 flex flex-col sm:flex-row sm:justify-center gap-3">
          <div className="rounded-md shadow">
            <a
              href={mainHero.primaryAction.href}
              className={`w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-background bg-primary hover:bg-border hover:text-primary md:py-4 md:text-lg md:px-10`}
            >
              {mainHero.primaryAction.text}
            </a>
          </div>
          <div className="rounded-md shadow">
            <a
              href={mainHero.secondaryAction.href}
              className={`w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md border-primary text-secondary bg-background hover:bg-border hover:text-primary md:py-4 md:text-lg md:px-10`}
            >
              {mainHero.secondaryAction.text}
            </a>
          </div>
          <div className="rounded-md shadow">
            <a
              href={mainHero.tertiaryAction.href}
              className={`w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md border-secondary text-secondary bg-background hover:bg-border hover:text-primary md:py-4 md:text-lg md:px-10`}
            >
              {mainHero.tertiaryAction.text}
            </a>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MainHero;
