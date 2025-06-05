import React, { useState } from 'react';

const EventTabs = () => {
  const [activeTab, setActiveTab] = useState('sp-team');

  const tabs = [
    { id: 'sp-team', name: 'SP团队赛' },
    { id: 'dp-team', name: 'DP团队赛' },
    { id: 'sp-individual', name: 'SP个人赛' },
  ];

  return (
    <div className="py-8 sm:py-16" id="event-details">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 lg:text-4xl">
            赛事详情
          </h2>
        </div>

        {/* 选项卡导航 */}
        <div className="flex justify-center mb-8">
          <div className="bg-gray-100 p-1 rounded-lg">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 sm:px-6 sm:py-3 rounded-md font-medium transition-all duration-200 text-sm sm:text-base ${
                  activeTab === tab.id
                    ? 'bg-white text-blue-600 shadow-md'
                    : 'text-gray-600 hover:text-gray-900'
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
              <h3 className="text-xl font-bold text-gray-900 mb-4">SP团队赛</h3>
              <p className="text-gray-600">
                SP团队赛的规则、抽签和结果内容将在这里显示...
              </p>
              {/* 这里将来会包含 Rules, Staff, Draw, Results 组件 */}
            </div>
          )}

          {activeTab === 'dp-team' && (
            <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">DP团队赛</h3>
              <p className="text-gray-600">
                DP团队赛的规则、抽签和结果内容将在这里显示...
              </p>
              {/* 这里将来会包含 Rules, Staff, Draw, Results 组件 */}
            </div>
          )}

          {activeTab === 'sp-individual' && (
            <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">SP个人赛</h3>
              <p className="text-gray-600">
                SP个人赛的规则、抽签和结果内容将在这里显示...
              </p>
              {/* 这里将来会包含 Rules, Staff, Draw, Results 组件 */}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EventTabs;
