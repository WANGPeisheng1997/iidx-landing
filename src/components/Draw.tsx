import React from 'react';

import config from '../config/index.json';

const Draw = () => {
  const { draw } = config;

  return (
    <div className="py-16 bg-white" id="draw">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            {draw.title}
          </h2>
        </div>

        <div className="mt-12 space-y-8">
          {/* 队伍分组 */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">队伍分组</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {draw.teams.map((team, index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-lg p-6 border border-gray-200"
                >
                  <h4 className="text-xl font-bold text-center text-gray-900 mb-4 pb-2 border-b border-gray-300">
                    {team.name}
                  </h4>
                  <ul className="space-y-2">
                    {team.members.map((member, memberIndex) => (
                      <li
                        key={memberIndex}
                        className="text-sm text-gray-600 px-3 py-1 bg-white rounded border"
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
            <h3 className="text-2xl font-bold text-gray-900 mb-6">对阵表</h3>
            <div className="bg-white shadow overflow-hidden sm:rounded-lg">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        轮次
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        对阵1
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        对阵2
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {draw.brackets.map((bracket, index) => (
                      <tr
                        key={index}
                        className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
                      >
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {bracket.round}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {bracket.match1}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {bracket.match2 || '-'}
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
  );
};

export default Draw;
