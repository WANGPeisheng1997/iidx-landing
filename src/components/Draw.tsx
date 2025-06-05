import React from 'react';

import config from '../config/index.json';

const Draw = () => {
  const { draw } = config;

  return (
    <div className="py-8 sm:py-16" id="draw">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 lg:text-4xl">
            {draw.title}
          </h2>
        </div>

        <div className="mt-8 sm:mt-12 space-y-6 sm:space-y-8">
          {/* 队伍分组 */}
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
              队伍分组
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6">
              {draw.teams.map((team, index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-lg p-4 sm:p-6 border border-gray-200"
                >
                  <h4 className="text-lg sm:text-xl font-bold text-center text-gray-900 mb-3 sm:mb-4 pb-2 border-b border-gray-300">
                    {team.name}
                  </h4>
                  <ul className="space-y-2">
                    {team.members.map((member, memberIndex) => (
                      <li
                        key={memberIndex}
                        className="text-xs sm:text-sm text-gray-600 px-2 sm:px-3 py-1 bg-white rounded border"
                      >
                        {member}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* 对阵表 */}
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
              对阵表
            </h3>
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
                          对阵1
                        </th>
                        <th className="px-2 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          对阵2
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {draw.brackets.map((bracket, index) => (
                        <tr
                          key={index}
                          className={
                            index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                          }
                        >
                          <td className="px-2 sm:px-6 py-4 text-xs sm:text-sm font-medium text-gray-900">
                            <div className="whitespace-normal sm:whitespace-nowrap">
                              {bracket.round}
                            </div>
                          </td>
                          <td className="px-2 sm:px-6 py-4 text-xs sm:text-sm text-gray-500">
                            <div className="whitespace-normal sm:whitespace-nowrap">
                              {bracket.match1}
                            </div>
                          </td>
                          <td className="px-2 sm:px-6 py-4 text-xs sm:text-sm text-gray-500">
                            <div className="whitespace-normal sm:whitespace-nowrap">
                              {bracket.match2 || '-'}
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Draw;
