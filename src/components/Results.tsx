import React, { useState } from 'react';

import config from '../config/index.json';

const Results = () => {
  const { results } = config;
  const [activeTab, setActiveTab] = useState('sp-team');

  const tabs = [
    { id: 'sp-team', name: 'SP团队赛' },
    { id: 'dp-team', name: 'DP团队赛' },
    { id: 'sp-individual', name: 'SP个人赛' },
  ];

  return (
    <div className="py-8 sm:py-16" id="results">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 lg:text-4xl">
            {results.title}
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
                SP团队赛结果
              </h3>
              <p className="text-gray-600">SP团队赛的比赛结果将在这里显示...</p>
            </div>
          )}

          {activeTab === 'dp-team' && (
            <>
              {/* 原有的DP团队赛内容 */}
              <div className="bg-white shadow overflow-hidden sm:rounded-lg">
                <div className="overflow-x-auto -mx-2 sm:mx-0">
                  <div className="inline-block min-w-full align-middle">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-2 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            轮次
                          </th>
                          <th className="px-2 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            对阵
                          </th>
                          <th className="px-2 sm:px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                            比分
                          </th>
                          <th className="px-2 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            获胜队伍
                          </th>
                          <th className="px-2 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            日期
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {results.matches.map((match, index) => (
                          <tr
                            key={index}
                            className={
                              index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                            }
                          >
                            <td className="px-2 sm:px-6 py-4 text-xs sm:text-sm font-medium text-gray-900">
                              <div className="whitespace-normal sm:whitespace-nowrap">
                                {match.round}
                              </div>
                            </td>
                            <td className="px-2 sm:px-6 py-4 text-xs sm:text-sm text-gray-500">
                              <div className="whitespace-normal sm:whitespace-nowrap">
                                {match.teamA} vs {match.teamB}
                              </div>
                            </td>
                            <td className="px-2 sm:px-6 py-4 text-xs sm:text-sm text-gray-500 text-center">
                              <span
                                className={`font-bold ${
                                  match.scoreA > match.scoreB
                                    ? 'text-green-600'
                                    : 'text-gray-600'
                                }`}
                              >
                                {match.scoreA}
                              </span>
                              <span className="mx-1">-</span>
                              <span
                                className={`font-bold ${
                                  match.scoreB > match.scoreA
                                    ? 'text-green-600'
                                    : 'text-gray-600'
                                }`}
                              >
                                {match.scoreB}
                              </span>
                            </td>
                            <td className="px-2 sm:px-6 py-4 text-xs sm:text-sm">
                              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                {match.winner}
                              </span>
                            </td>
                            <td className="px-2 sm:px-6 py-4 text-xs sm:text-sm text-gray-500">
                              <div className="whitespace-normal sm:whitespace-nowrap">
                                {match.date}
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              {/* 冠军 */}
              <div className="text-center">
                <div className="inline-flex items-center px-4 py-2 rounded-md bg-yellow-100 border border-yellow-300">
                  <svg
                    className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-600 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-sm sm:text-lg font-bold text-yellow-800">
                    冠军：{results.champion}
                  </span>
                </div>
              </div>
            </>
          )}

          {activeTab === 'sp-individual' && (
            <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                SP个人赛结果
              </h3>
              <p className="text-gray-600">SP个人赛的比赛结果将在这里显示...</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Results;
