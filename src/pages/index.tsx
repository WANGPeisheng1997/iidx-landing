import React from 'react';

import Analytics from '../components/Analytics';
import Canvas from '../components/Canvas';
import Draw from '../components/Draw';
import Header from '../components/Header';
import LazyShow from '../components/LazyShow';
import MainHero from '../components/MainHero';
import MainHeroImage from '../components/MainHeroImage';
import Registration from '../components/Registration';
import Results from '../components/Results';
import Rules from '../components/Rules';
import Staff from '../components/Staff';

const App = () => {
  return (
    <div className={`bg-background grid gap-y-16 overflow-hidden`}>
      <div className={`relative bg-background`}>
        <div className="max-w-7xl mx-auto">
          <div
            className={`relative z-10 pb-8 bg-background sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32`}
          >
            <Header />
            <MainHero />
          </div>
        </div>
        <MainHeroImage />
      </div>
      <Canvas />
      <LazyShow>
        <>
          <Registration />
          <Canvas />
        </>
      </LazyShow>
      <LazyShow>
        <>
          <Rules />
          <Canvas />
        </>
      </LazyShow>
      <LazyShow>
        <Staff />
      </LazyShow>
      <LazyShow>
        <>
          <Canvas />
          <Draw />
        </>
      </LazyShow>
      <LazyShow>
        <Results />
      </LazyShow>
      <Analytics />
    </div>
  );
};

export default App;
