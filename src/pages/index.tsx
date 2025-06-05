import React, { useEffect } from 'react';

import Analytics from '../components/Analytics';
import Draw from '../components/Draw';
import Header from '../components/Header';
import LazyShow from '../components/LazyShow';
import MainHero from '../components/MainHero';
import Results from '../components/Results';
import Rules from '../components/Rules';
import Staff from '../components/Staff';

const App = () => {
  useEffect(() => {
    // 移除原有的body背景设置，改用CSS背景层系统
    // 只保留必要的清理
    return () => {
      // 清理函数保持不变，以防万一
    };
  }, []);

  return (
    <div className="fade">
      {/* 背景层系统 */}
      <div id="bg">
        <div id="bg00"></div>
        <div id="bg01"></div>
        <div id="bg02"></div>
      </div>

      <div className="main-wrapper">
        <div className={`grid gap-y-8 overflow-hidden relative min-h-screen`}>
          <div className={`relative bg-transparent overflow-hidden`}>
            {/*
            <div className="absolute inset-0 w-full h-full">
              <div className="absolute bottom-0 left-0 right-0 z-0">
                <Canvas />
              </div>
            </div>
            */}
            <div className="relative z-10 max-w-7xl mx-auto">
              <div className={`pb-8 bg-transparent sm:pb-16 md:pb-20 xl:pb-32`}>
                <Header />
                <MainHero />
              </div>
            </div>
          </div>

          <div className="main-content">
            {/* 赛事详情 */}
            <div className="py-8 sm:py-12" id="event-details">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 lg:text-4xl">
                    赛事详情
                  </h2>
                </div>
              </div>
            </div>

            {/* 宣传图片 */}
            <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
              <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 lg:gap-8 justify-center items-center lg:items-stretch">
                <img
                  id="registration-image"
                  src="/assets/images/TPLS2_宣传小图1.png"
                  alt="TPLS2 宣传图1"
                  className="w-full lg:w-auto lg:flex-1 max-w-xs mx-auto h-auto object-cover rounded-lg transform hover:-translate-y-3 hover:scale-105 transition-all duration-300"
                  style={{
                    boxShadow:
                      '0 8px 16px rgba(0, 0, 0, 0.4), 0 4px 8px rgba(0, 0, 0, 0.3), 0 2px 4px rgba(0, 0, 0, 0.2)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                  }}
                />
                <img
                  src="/assets/images/TPLS2_宣传小图2.png"
                  alt="TPLS2 宣传图2"
                  className="w-full lg:w-auto lg:flex-1 max-w-xs mx-auto h-auto object-cover rounded-lg transform hover:-translate-y-3 hover:scale-105 transition-all duration-300"
                  style={{
                    boxShadow:
                      '0 8px 16px rgba(0, 0, 0, 0.4), 0 4px 8px rgba(0, 0, 0, 0.3), 0 2px 4px rgba(0, 0, 0, 0.2)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                  }}
                />
                <img
                  id="viewing-image"
                  src="/assets/images/TPLS2_宣传小图3.png"
                  alt="TPLS2 宣传图3"
                  className="w-full lg:w-auto lg:flex-1 max-w-xs mx-auto h-auto object-cover rounded-lg transform hover:-translate-y-3 hover:scale-105 transition-all duration-300"
                  style={{
                    boxShadow:
                      '0 8px 16px rgba(0, 0, 0, 0.4), 0 4px 8px rgba(0, 0, 0, 0.3), 0 2px 4px rgba(0, 0, 0, 0.2)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                  }}
                />
              </div>
            </div>

            <LazyShow>
              <Rules />
            </LazyShow>
            <LazyShow>
              <Draw />
            </LazyShow>
            <LazyShow>
              <Results />
            </LazyShow>
            <LazyShow>
              <Staff />
            </LazyShow>

            {/* 页脚 */}
            <footer className="bg-gray-900 text-white py-8">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <p
                  className="text-sm text-white"
                  style={{ color: '#ffffff !important' }}
                >
                  © 2025 TTW PRO LEAGUE
                </p>
              </div>
            </footer>
          </div>

          <Analytics />
        </div>
      </div>
    </div>
  );
};

export default App;
