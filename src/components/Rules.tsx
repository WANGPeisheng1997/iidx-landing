import React from 'react';

import config from '../config/index.json';

const Rules = () => {
  const { rules } = config;

  return (
    <div className="py-8 sm:py-16" id="rules">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 lg:text-4xl">
            {rules.title}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-500">
            {rules.subtitle}
          </p>
        </div>

        <div className="mt-8 sm:mt-12 space-y-8 sm:space-y-12">
          {rules.sections.map((section, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-4 sm:p-6">
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
                      <table className="min-w-full divide-y divide-gray-200">
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
                      <table className="min-w-full divide-y divide-gray-200">
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
                    className="inline-flex items-center px-3 sm:px-4 py-2 border border-transparent text-xs sm:text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                  >
                    查看现行AC EPOLIS曲库
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

        {/* 课题抽选规则说明 */}
        <div className="mt-8 sm:mt-12 bg-blue-50 rounded-lg p-4 sm:p-6">
          <h3 className="text-lg sm:text-xl font-bold text-blue-900 mb-4">
            课题抽选规则
          </h3>
          <div className="space-y-3 text-blue-800 text-sm sm:text-base">
            <p>课题共六组：NOTES/CHORD/PEAK/CHARGE/SCRATCH/SOF-LAN</p>
            <p>
              • 一对一比赛（6局）：在A池中随机抽选，不可重复，每个课题出现一次
            </p>
            <p>• 二对二比赛（2局）：在B池中随机抽选，只需保证两局课题不相同</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rules;
