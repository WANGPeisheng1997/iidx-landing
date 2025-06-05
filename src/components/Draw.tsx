import React, { useState } from 'react';

import config from '../config/index.json';

const Draw = () => {
  const { draw } = config;
  const [activeTab, setActiveTab] = useState('sp-team');

  const tabs = [
    { id: 'sp-team', name: 'SP团队赛' },
    { id: 'dp-team', name: 'DP团队赛' },
    { id: 'sp-individual', name: 'SP个人赛' },
  ];

  return (
    <div className="py-8 sm:py-16" id="draw">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 lg:text-4xl">
            {draw.title}
          </h2>
        </div>

        {/* 选项卡导航 */}
        <div className="flex justify-center mt-8 mb-8">
          <div className="bg-gray-100 p-1 rounded-lg">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 sm:px-6 sm:py-3 rounded-md font-medium transition-all duration-200 text-sm sm:text-base ${
                  activeTab === tab.id
                    ? 'bg-white text-blue-600 shadow-md'
                    : 'text-white hover:text-gray-200'
                }`}
              >
                {tab.name}
              </button>
            ))}
          </div>
        </div>

        {/* 选项卡内容 */}
        <div className="space-y-8">
          {activeTab === 'sp-team' && (
            <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                SP团队赛抽签
              </h3>
              <p className="text-gray-600">SP团队赛的抽签结果将在这里显示...</p>
            </div>
          )}

          {activeTab === 'dp-team' && (
            <>
              {/* 原有的DP团队赛内容 */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                {draw.teams.map((team, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg shadow-lg p-4 sm:p-6"
                  >
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 text-center">
                      {team.name}
                    </h3>
                    <ul className="space-y-2 text-sm sm:text-base">
                      {team.members.map((member, memberIndex) => (
                        <li key={memberIndex} className="text-gray-600">
                          {member}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 border border-gray-200">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4">
                  对阵表
                </h3>
                <div className="space-y-4">
                  {draw.brackets.map((bracket, index) => (
                    <div
                      key={index}
                      className="bg-gray-50 rounded-lg p-4 border border-gray-200"
                    >
                      <h4 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">
                        {bracket.round}
                      </h4>
                      <div className="space-y-2 text-sm sm:text-base">
                        <div className="text-gray-600">{bracket.match1}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}

          {activeTab === 'sp-individual' && (
            <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                SP个人赛抽签
              </h3>
              <p className="text-gray-600">SP个人赛的抽签结果将在这里显示...</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Draw;
