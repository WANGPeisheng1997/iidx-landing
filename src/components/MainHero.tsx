import React from 'react';

import config from '../config/index.json';

const MainHero = () => {
  const { mainHero } = config;

  const smoothScrollTo = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  const handleClick = (href: string) => {
    if (href.startsWith('#')) {
      const elementId = href.substring(1);
      smoothScrollTo(elementId);
    } else {
      window.location.href = href;
    }
  };

  return (
    <main className="mt-6 mx-auto max-w-7xl px-4 sm:mt-8 sm:px-6 md:mt-10 lg:mt-12 lg:px-8 xl:mt-12">
      {/* Hero Image */}
      <div className="w-full max-w-none mb-8 sm:mb-12">
        <img
          src={mainHero.img}
          alt="TPLS2 Logo"
          className="w-full h-auto object-contain max-w-full"
        />
      </div>

      <div className="text-center">
        <div className="hero-description-container">
          <p className="hero-description-text text-base sm:text-lg sm:max-w-3xl sm:mx-auto md:text-xl whitespace-pre-line">
            <span className="font-bold">
              <span style={{ color: 'rgb(248, 227, 0)' }}>TTW</span>{' '}
              <span style={{ color: 'rgb(0, 193, 235)' }}>PRO</span>{' '}
              <span style={{ color: 'rgb(232, 41, 72)' }}>LEAGUE</span>
            </span>{' '}
            (TPL) 是一项BEMANI系列的大型团队赛事，{'\n'}
            自2024年起由{' '}
            <span className="font-bold text-red-500">
              天天玩x秋葉原日系动漫游戏中心
            </span>{' '}
            赞助并在此举办，{'\n'}
            旨在为玩家提供高水平的竞技平台。现已设立beatmania IIDX部门。
          </p>
        </div>
        <div className="mt-5 sm:mt-8">
          <div className="main-hero-buttons flex flex-row justify-between items-center px-4 sm:px-6 lg:px-8 gap-6 sm:gap-16 lg:gap-16">
            <button
              onClick={() => handleClick(mainHero.primaryAction.href)}
              className="flex-1 flex items-center justify-center px-4 py-3 sm:px-6 sm:py-4 lg:px-8 lg:py-5 border border-transparent text-sm sm:text-base lg:text-lg xl:text-xl font-bold rounded-md transition-all duration-300 shadow-lg whitespace-nowrap"
            >
              {mainHero.primaryAction.text}
            </button>
            <button
              onClick={() => handleClick(mainHero.secondaryAction.href)}
              className="flex-1 flex items-center justify-center px-4 py-3 sm:px-6 sm:py-4 lg:px-8 lg:py-5 border border-transparent text-sm sm:text-base lg:text-lg xl:text-xl font-bold rounded-md transition-all duration-300 shadow-lg whitespace-nowrap"
            >
              {mainHero.secondaryAction.text}
            </button>
            <button
              onClick={() => handleClick(mainHero.tertiaryAction.href)}
              className="flex-1 flex items-center justify-center px-4 py-3 sm:px-6 sm:py-4 lg:px-8 lg:py-5 border border-transparent text-sm sm:text-base lg:text-lg xl:text-xl font-bold rounded-md transition-all duration-300 shadow-lg whitespace-nowrap"
            >
              {mainHero.tertiaryAction.text}
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MainHero;
