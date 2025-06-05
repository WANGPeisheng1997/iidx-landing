import React from 'react';

import config from '../config/index.json';

const Results = () => {
  const { results } = config;

  return (
    <div className="py-8 sm:py-16" id="results">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 lg:text-4xl">
            {results.title}
          </h2>
        </div>

        {/* 比赛结果表格 */}
        <div className="mt-8 sm:mt-12">
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
                        队伍A
                      </th>
                      <th className="px-2 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        比分
                      </th>
                      <th className="px-2 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        队伍B
                      </th>
                      <th className="px-2 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        获胜方
                      </th>
                      <th className="px-2 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        比赛日期
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {results.matches.map((match, index) => (
                      <tr
                        key={index}
                        className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
                      >
                        <td className="px-2 sm:px-6 py-4 text-xs sm:text-sm font-medium text-gray-900">
                          <div className="whitespace-normal sm:whitespace-nowrap">
                            {match.round}
                          </div>
                        </td>
                        <td className="px-2 sm:px-6 py-4 text-xs sm:text-sm text-gray-500">
                          <div className="whitespace-normal sm:whitespace-nowrap">
                            {match.teamA}
                          </div>
                        </td>
                        <td className="px-2 sm:px-6 py-4 text-xs sm:text-sm font-bold text-gray-900">
                          <div className="whitespace-normal sm:whitespace-nowrap">
                            {match.scoreA} : {match.scoreB}
                          </div>
                        </td>
                        <td className="px-2 sm:px-6 py-4 text-xs sm:text-sm text-gray-500">
                          <div className="whitespace-normal sm:whitespace-nowrap">
                            {match.teamB}
                          </div>
                        </td>
                        <td className="px-2 sm:px-6 py-4 text-xs sm:text-sm font-medium text-green-600">
                          <div className="whitespace-normal sm:whitespace-nowrap">
                            {match.winner}
                          </div>
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
        </div>

        {/* 冠军展示 */}
        <div className="mt-8 sm:mt-12 text-center">
          <div className="bg-yellow-100 border border-yellow-400 rounded-lg p-6 sm:p-8">
            <h3 className="text-xl sm:text-2xl font-bold text-yellow-800 mb-2">
              🏆 冠军队伍
            </h3>
            <p className="text-2xl sm:text-3xl font-extrabold text-yellow-900">
              {results.champion}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Results;
