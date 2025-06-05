import React, { useState } from 'react';

import config from '../config/index.json';

const Rules = () => {
  const { rules } = config;
  const [activeTab, setActiveTab] = useState('sp-team');

  const tabs = [
    { id: 'sp-team', name: 'SP团队赛' },
    { id: 'dp-team', name: 'DP团队赛' },
    { id: 'sp-individual', name: 'SP个人赛' },
  ];

  return (
    <div className="py-8 sm:py-16" id="rules">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 lg:text-4xl">
            {rules.title}
          </h2>
          {rules.subtitle && (
            <p className="mt-4 text-base sm:text-lg text-gray-500">
              {rules.subtitle}
            </p>
          )}
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
            <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6">
              {rules.sp_sections.map((section, index) => (
                <div key={index}>
                  {/* 添加分割线，除了第一个section */}
                  {index > 0 && (
                    <hr className="my-8 border-t border-gray-200" />
                  )}

                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                    {section.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed text-sm sm:text-base whitespace-pre-line">
                    {section.content}
                  </p>

                  {/* 注释说明 */}
                  {section.note && (
                    <div className="mb-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                      <p className="text-blue-800 text-sm italic">
                        {section.note}
                      </p>
                    </div>
                  )}

                  {/* SP团队赛赛制表格 */}
                  {section.sp_schedule && (
                    <div className="mt-6">
                      <h4 className="text-base sm:text-lg font-semibold text-gray-800 mb-4">
                        比赛安排
                      </h4>
                      <div className="overflow-x-auto -mx-4 sm:mx-0">
                        <div className="inline-block min-w-full align-middle">
                          <table className="min-w-full divide-y divide-gray-200 bg-white">
                            <thead className="bg-gray-50">
                              <tr>
                                <th className="px-2 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                  局次
                                </th>
                                <th className="px-2 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                  等级限制
                                </th>
                                <th className="px-2 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                  赛制和分数分配
                                </th>
                                <th className="px-2 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                  对战课题
                                </th>
                              </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                              {section.sp_schedule.map((match, idx) => (
                                <tr
                                  key={idx}
                                  className={
                                    idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                                  }
                                >
                                  <td className="px-2 sm:px-6 py-4 text-xs sm:text-sm font-medium text-gray-900">
                                    <div className="whitespace-normal sm:whitespace-nowrap">
                                      {match.match}
                                    </div>
                                  </td>
                                  <td className="px-2 sm:px-6 py-4 text-xs sm:text-sm text-gray-500">
                                    <div className="whitespace-normal sm:whitespace-nowrap">
                                      {match.level}
                                    </div>
                                  </td>
                                  <td className="px-2 sm:px-6 py-4 text-xs sm:text-sm text-gray-500">
                                    <div className="whitespace-normal sm:whitespace-nowrap">
                                      <div>{match.format}</div>
                                      <div className="font-semibold text-blue-600">
                                        {match.points}
                                      </div>
                                    </div>
                                  </td>
                                  <td className="px-2 sm:px-6 py-4 text-xs sm:text-sm text-gray-500">
                                    <div className="whitespace-normal sm:whitespace-nowrap">
                                      {match.pool}
                                    </div>
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* 详细说明列表 */}
                  {section.details && (
                    <div className="mt-6">
                      <ul className="list-disc list-inside space-y-2 text-gray-600 text-sm sm:text-base">
                        {section.details.map((detail, idx) => (
                          <li key={idx}>{detail}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* 选曲范围链接 */}
                  {section.link && (
                    <div className="mt-6">
                      <a
                        href={section.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-3 sm:px-4 py-2 border border-transparent text-xs sm:text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
                      >
                        查看现行AC: beatmania IIDX 32 Pinky Crush曲库
                        <svg
                          className="ml-2 -mr-1 w-3 h-3 sm:w-4 sm:h-4"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </a>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {activeTab === 'dp-team' && (
            <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6">
              {rules.sections.map((section, index) => (
                <div key={index}>
                  {/* 添加分割线，除了第一个section */}
                  {index > 0 && (
                    <hr className="my-8 border-t border-gray-200" />
                  )}

                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                    {section.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed text-sm sm:text-base">
                    {section.content}
                  </p>

                  {/* 16人制比赛表格 */}
                  {section.schedule && (
                    <div className="mt-6">
                      <h4 className="text-base sm:text-lg font-semibold text-gray-800 mb-4">
                        比赛安排
                      </h4>
                      <div className="overflow-x-auto -mx-4 sm:mx-0">
                        <div className="inline-block min-w-full align-middle">
                          <table className="min-w-full divide-y divide-gray-200 bg-white">
                            <thead className="bg-gray-50">
                              <tr>
                                <th className="px-2 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                  局次
                                </th>
                                <th className="px-2 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                  等级限制
                                </th>
                                <th className="px-2 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                  赛制
                                </th>
                                <th className="px-2 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                  分数
                                </th>
                              </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                              {section.schedule.map((match, idx) => (
                                <tr
                                  key={idx}
                                  className={
                                    idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                                  }
                                >
                                  <td className="px-2 sm:px-6 py-4 text-xs sm:text-sm font-medium text-gray-900">
                                    <div className="whitespace-normal sm:whitespace-nowrap">
                                      {match.match}
                                    </div>
                                  </td>
                                  <td className="px-2 sm:px-6 py-4 text-xs sm:text-sm text-gray-500">
                                    <div className="whitespace-normal sm:whitespace-nowrap">
                                      {match.level}
                                    </div>
                                  </td>
                                  <td className="px-2 sm:px-6 py-4 text-xs sm:text-sm text-gray-500">
                                    <div className="whitespace-normal sm:whitespace-nowrap">
                                      {match.format}
                                    </div>
                                  </td>
                                  <td className="px-2 sm:px-6 py-4 text-xs sm:text-sm text-gray-500">
                                    <div className="whitespace-normal sm:whitespace-nowrap">
                                      {match.points}
                                    </div>
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* 32人制比赛表格 */}
                  {section.schedule32 && (
                    <div className="mt-6">
                      <h4 className="text-base sm:text-lg font-semibold text-gray-800 mb-4">
                        比赛安排（32人制）
                      </h4>
                      <div className="overflow-x-auto -mx-4 sm:mx-0">
                        <div className="inline-block min-w-full align-middle">
                          <table className="min-w-full divide-y divide-gray-200 bg-white">
                            <thead className="bg-gray-50">
                              <tr>
                                <th className="px-2 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                  局次
                                </th>
                                <th className="px-2 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                  等级限制
                                </th>
                                <th className="px-2 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                  赛制
                                </th>
                                <th className="px-2 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                  分数分配
                                </th>
                                <th className="px-2 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                  课题池
                                </th>
                              </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                              {section.schedule32.map((match, idx) => (
                                <tr
                                  key={idx}
                                  className={
                                    idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                                  }
                                >
                                  <td className="px-2 sm:px-6 py-4 text-xs sm:text-sm font-medium text-gray-900">
                                    <div className="whitespace-normal sm:whitespace-nowrap">
                                      {match.match}
                                    </div>
                                  </td>
                                  <td className="px-2 sm:px-6 py-4 text-xs sm:text-sm text-gray-500">
                                    <div className="whitespace-normal sm:whitespace-nowrap">
                                      {match.level}
                                    </div>
                                  </td>
                                  <td className="px-2 sm:px-6 py-4 text-xs sm:text-sm text-gray-500">
                                    <div className="whitespace-normal sm:whitespace-nowrap">
                                      {match.format}
                                    </div>
                                  </td>
                                  <td className="px-2 sm:px-6 py-4 text-xs sm:text-sm text-gray-500">
                                    <div className="whitespace-normal sm:whitespace-nowrap">
                                      {match.points}
                                    </div>
                                  </td>
                                  <td className="px-2 sm:px-6 py-4 text-xs sm:text-sm text-gray-500">
                                    <div className="whitespace-normal sm:whitespace-nowrap">
                                      {match.pool}
                                    </div>
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* 选曲范围链接 */}
                  {section.link && (
                    <div className="mt-6">
                      <a
                        href={section.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-3 sm:px-4 py-2 border border-transparent text-xs sm:text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
                      >
                        查看现行AC: beatmania IIDX 32 Pinky Crush曲库
                        <svg
                          className="ml-2 -mr-1 w-3 h-3 sm:w-4 sm:h-4"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </a>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {activeTab === 'sp-individual' && (
            <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                SP个人赛规则
              </h3>
              <p className="text-gray-600">
                SP个人赛的具体规则内容将在这里显示...
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Rules;
