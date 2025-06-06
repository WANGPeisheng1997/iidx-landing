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
              {rules.sp_sections.map((section: any, index: number) => (
                <div key={index}>
                  {/* 添加分割线，除了第一个section */}
                  {index > 0 && (
                    <hr className="my-8 border-t border-gray-200" />
                  )}

                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                    {section.title}
                  </h3>
                  <div className="text-gray-600 mb-6 leading-loose text-sm sm:text-base space-y-2">
                    {section.content
                      .split('\n')
                      .map((line: any, lineIndex: number) => {
                        if (line.includes('：')) {
                          const [label, ...valueParts] = line.split('：');
                          const value = valueParts.join('：');
                          return (
                            <div key={lineIndex} className="flex flex-wrap">
                              <span className="font-semibold text-gray-800 mr-1">
                                {label}：
                              </span>
                              <span className="font-normal">{value}</span>
                            </div>
                          );
                        }
                        return line ? (
                          <p key={lineIndex} className="font-normal">
                            {line}
                          </p>
                        ) : (
                          <div key={lineIndex} className="h-2"></div>
                        );
                      })}
                  </div>

                  {/* SP课题曲表格 */}
                  {section.sp_course_songs && (
                    <div className="mt-6">
                      <div className="overflow-x-auto -mx-4 sm:mx-0">
                        <div className="inline-block min-w-full align-middle">
                          <table className="min-w-full divide-y divide-gray-200 bg-white">
                            <thead className="bg-gray-50">
                              <tr>
                                <th className="px-2 sm:px-6 py-3 text-center text-xs sm:text-sm font-medium text-gray-500 uppercase tracking-wider">
                                  等级
                                </th>
                                <th className="px-2 sm:px-6 py-3 text-left text-xs sm:text-sm font-medium text-gray-500 uppercase tracking-wider">
                                  歌名
                                </th>
                                <th className="px-2 sm:px-6 py-3 text-center text-xs sm:text-sm font-medium text-gray-500 uppercase tracking-wider">
                                  难度
                                </th>
                                <th className="px-2 sm:px-6 py-3 text-center text-xs sm:text-sm font-medium text-gray-500 uppercase tracking-wider">
                                  版本
                                </th>
                                <th className="px-2 sm:px-6 py-3 text-center text-xs sm:text-sm font-medium text-gray-500 uppercase tracking-wider">
                                  BPM
                                </th>
                                <th className="px-2 sm:px-6 py-3 text-center text-xs sm:text-sm font-medium text-gray-500 uppercase tracking-wider">
                                  物量
                                </th>
                                <th className="px-2 sm:px-6 py-3 text-center text-xs sm:text-sm font-medium text-gray-500 uppercase tracking-wider">
                                  权重
                                </th>
                              </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                              {section.sp_course_songs.map(
                                (song: any, idx: number) => (
                                  <tr
                                    key={idx}
                                    className={
                                      idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                                    }
                                  >
                                    <td className="px-2 sm:px-6 py-4 text-xs sm:text-sm font-bold text-center text-gray-900">
                                      {song.level}
                                    </td>
                                    <td className="px-2 sm:px-6 py-4 text-xs sm:text-sm font-medium text-gray-900">
                                      <div className="whitespace-normal sm:whitespace-nowrap">
                                        {song.title}
                                      </div>
                                    </td>
                                    <td className="px-2 sm:px-6 py-4 text-xs sm:text-sm text-center text-gray-500">
                                      {song.difficulty}
                                    </td>
                                    <td className="px-2 sm:px-6 py-4 text-xs sm:text-sm text-center text-gray-500">
                                      <div className="whitespace-normal sm:whitespace-nowrap">
                                        {song.version}
                                      </div>
                                    </td>
                                    <td className="px-2 sm:px-6 py-4 text-xs sm:text-sm text-center text-gray-500">
                                      {song.bpm}
                                    </td>
                                    <td className="px-2 sm:px-6 py-4 text-xs sm:text-sm text-center text-gray-500">
                                      {song.notes}
                                    </td>
                                    <td className="px-2 sm:px-6 py-4 text-xs sm:text-sm text-center text-blue-600">
                                      {song.weight}
                                    </td>
                                  </tr>
                                )
                              )}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* 课题类型表格 */}
                  {section.course_types && (
                    <div className="mt-6">
                      <h4 className="text-base sm:text-lg font-semibold text-gray-800 mb-4">
                        课题类型说明
                      </h4>
                      <div className="overflow-x-auto -mx-4 sm:mx-0">
                        <div className="inline-block min-w-full align-middle">
                          <table className="min-w-full divide-y divide-gray-200 bg-white">
                            <thead className="bg-gray-50">
                              <tr>
                                <th className="px-2 sm:px-6 py-3 text-center text-xs sm:text-sm font-medium text-gray-500 uppercase tracking-wider">
                                  课题名称
                                </th>
                                <th className="px-2 sm:px-6 py-3 text-left text-xs sm:text-sm font-medium text-gray-500 uppercase tracking-wider">
                                  课题说明
                                </th>
                              </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                              {section.course_types.map(
                                (courseType: any, idx: number) => (
                                  <tr
                                    key={idx}
                                    className={
                                      idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                                    }
                                  >
                                    <td className="px-2 sm:px-6 py-4 text-xs sm:text-sm font-bold text-center text-gray-900">
                                      {courseType.name}
                                    </td>
                                    <td className="px-2 sm:px-6 py-4 text-xs sm:text-sm text-gray-600">
                                      {courseType.description}
                                    </td>
                                  </tr>
                                )
                              )}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* 团队赛赛制表格 */}
                  {section.team_schedule && (
                    <div className="mt-6 space-y-8">
                      {section.team_schedule.map(
                        (schedule: any, scheduleIndex: number) => (
                          <div key={scheduleIndex}>
                            <h4 className="text-base sm:text-lg font-semibold text-gray-800 mb-4">
                              {schedule.title}比赛流程
                            </h4>
                            {schedule.pre_description && (
                              <div className="text-gray-600 mb-6 leading-loose text-sm sm:text-base space-y-2 whitespace-pre-line">
                                {schedule.pre_description
                                  .split('\n')
                                  .map((line: any, lineIndex: number) => {
                                    if (line.includes('：')) {
                                      const [label, ...valueParts] =
                                        line.split('：');
                                      const value = valueParts.join('：');
                                      return (
                                        <div
                                          key={lineIndex}
                                          className="flex flex-wrap"
                                        >
                                          <span className="font-semibold text-gray-800 mr-1">
                                            {label}：
                                          </span>
                                          <span className="font-normal">
                                            {value}
                                          </span>
                                        </div>
                                      );
                                    }
                                    return line ? (
                                      <p
                                        key={lineIndex}
                                        className="font-normal"
                                      >
                                        {line}
                                      </p>
                                    ) : (
                                      <div
                                        key={lineIndex}
                                        className="h-2"
                                      ></div>
                                    );
                                  })}
                              </div>
                            )}
                            <div className="overflow-x-auto -mx-4 sm:mx-0">
                              <div className="inline-block min-w-full align-middle">
                                <table className="min-w-full divide-y divide-gray-200 bg-white">
                                  <thead className="bg-gray-50">
                                    <tr>
                                      <th className="px-2 sm:px-6 py-3 text-center text-xs sm:text-sm font-medium text-gray-500 uppercase tracking-wider">
                                        战位
                                      </th>
                                      <th className="px-2 sm:px-6 py-3 text-center text-xs sm:text-sm font-medium text-gray-500 uppercase tracking-wider">
                                        局次
                                      </th>
                                      <th className="px-2 sm:px-6 py-3 text-center text-xs sm:text-sm font-medium text-gray-500 uppercase tracking-wider">
                                        等级限制
                                      </th>
                                      <th className="px-2 sm:px-6 py-3 text-center text-xs sm:text-sm font-medium text-gray-500 uppercase tracking-wider">
                                        赛制
                                      </th>
                                      <th className="px-2 sm:px-6 py-3 text-center text-xs sm:text-sm font-medium text-gray-500 uppercase tracking-wider">
                                        分数分配
                                      </th>
                                      <th className="px-2 sm:px-6 py-3 text-center text-xs sm:text-sm font-medium text-gray-500 uppercase tracking-wider">
                                        对战课题
                                      </th>
                                    </tr>
                                  </thead>
                                  <tbody className="bg-white divide-y divide-gray-200">
                                    {(() => {
                                      let currentPosition = '';
                                      let positionRowCount = 0;
                                      let currentFormat = '';
                                      let formatRowCount = 0;
                                      let currentPoints = '';
                                      let pointsRowCount = 0;
                                      let currentPool = '';
                                      let poolRowCount = 0;

                                      // 计算每个战位的行数
                                      const positionCounts =
                                        schedule.matches.reduce(
                                          (
                                            acc: Record<string, number>,
                                            match: any
                                          ) => {
                                            acc[match.position] =
                                              (acc[match.position] || 0) + 1;
                                            return acc;
                                          },
                                          {}
                                        );

                                      // 计算连续相同赛制的行数
                                      const formatCounts: number[] = [];
                                      let tempFormat = '';
                                      let tempCount = 0;
                                      schedule.matches.forEach(
                                        (match: any, idx: number) => {
                                          if (match.format !== tempFormat) {
                                            if (tempCount > 0) {
                                              for (
                                                let i = 0;
                                                i < tempCount;
                                                i += 1
                                              ) {
                                                formatCounts.push(tempCount);
                                              }
                                            }
                                            tempFormat = match.format;
                                            tempCount = 1;
                                          } else {
                                            tempCount += 1;
                                          }
                                          if (
                                            idx ===
                                            schedule.matches.length - 1
                                          ) {
                                            for (
                                              let i = 0;
                                              i < tempCount;
                                              i += 1
                                            ) {
                                              formatCounts.push(tempCount);
                                            }
                                          }
                                        }
                                      );

                                      // 计算连续相同分数的行数
                                      const pointsCounts: number[] = [];
                                      let tempPoints = '';
                                      let tempPointsCount = 0;
                                      schedule.matches.forEach(
                                        (match: any, idx: number) => {
                                          if (match.points !== tempPoints) {
                                            if (tempPointsCount > 0) {
                                              for (
                                                let i = 0;
                                                i < tempPointsCount;
                                                i += 1
                                              ) {
                                                pointsCounts.push(
                                                  tempPointsCount
                                                );
                                              }
                                            }
                                            tempPoints = match.points;
                                            tempPointsCount = 1;
                                          } else {
                                            tempPointsCount += 1;
                                          }
                                          if (
                                            idx ===
                                            schedule.matches.length - 1
                                          ) {
                                            for (
                                              let i = 0;
                                              i < tempPointsCount;
                                              i += 1
                                            ) {
                                              pointsCounts.push(
                                                tempPointsCount
                                              );
                                            }
                                          }
                                        }
                                      );

                                      // 计算连续相同课题的行数
                                      const poolCounts: number[] = [];
                                      let tempPool = '';
                                      let tempPoolCount = 0;
                                      schedule.matches.forEach(
                                        (match: any, idx: number) => {
                                          if (match.pool !== tempPool) {
                                            if (tempPoolCount > 0) {
                                              for (
                                                let i = 0;
                                                i < tempPoolCount;
                                                i += 1
                                              ) {
                                                poolCounts.push(tempPoolCount);
                                              }
                                            }
                                            tempPool = match.pool;
                                            tempPoolCount = 1;
                                          } else {
                                            tempPoolCount += 1;
                                          }
                                          if (
                                            idx ===
                                            schedule.matches.length - 1
                                          ) {
                                            for (
                                              let i = 0;
                                              i < tempPoolCount;
                                              i += 1
                                            ) {
                                              poolCounts.push(tempPoolCount);
                                            }
                                          }
                                        }
                                      );

                                      return schedule.matches.map(
                                        (match: any, idx: number) => {
                                          const shouldShowPosition =
                                            match.position !== currentPosition;
                                          const shouldShowFormat =
                                            match.format !== currentFormat;
                                          const shouldShowPoints =
                                            match.points !== currentPoints;
                                          const shouldShowPool =
                                            match.pool !== currentPool;

                                          if (shouldShowPosition) {
                                            currentPosition = match.position;
                                            positionRowCount =
                                              positionCounts[match.position] ||
                                              0;
                                          }

                                          if (shouldShowFormat) {
                                            currentFormat = match.format;
                                            formatRowCount =
                                              formatCounts[idx] || 1;
                                          }

                                          if (shouldShowPoints) {
                                            currentPoints = match.points;
                                            pointsRowCount =
                                              pointsCounts[idx] || 1;
                                          }

                                          if (shouldShowPool) {
                                            currentPool = match.pool;
                                            poolRowCount = poolCounts[idx] || 1;
                                          }

                                          return (
                                            <tr
                                              key={idx}
                                              className={
                                                idx % 2 === 0
                                                  ? 'bg-white'
                                                  : 'bg-gray-50'
                                              }
                                            >
                                              {shouldShowPosition && (
                                                <td
                                                  rowSpan={positionRowCount}
                                                  className="px-2 sm:px-6 py-4 text-xs sm:text-sm font-bold text-center text-gray-900 rules-table-merged-cell"
                                                >
                                                  {match.position}
                                                </td>
                                              )}
                                              <td className="px-2 sm:px-6 py-4 text-xs sm:text-sm font-medium text-gray-900 text-center">
                                                <div className="whitespace-normal sm:whitespace-nowrap">
                                                  {match.match}
                                                </div>
                                              </td>
                                              <td className="px-2 sm:px-6 py-4 text-xs sm:text-sm text-gray-500 text-center">
                                                <div className="whitespace-normal sm:whitespace-nowrap">
                                                  {match.level}
                                                </div>
                                              </td>
                                              {shouldShowFormat && (
                                                <td
                                                  rowSpan={formatRowCount}
                                                  className="px-2 sm:px-6 py-4 text-xs sm:text-sm text-gray-500 text-center rules-table-merged-cell"
                                                >
                                                  <div className="whitespace-normal sm:whitespace-nowrap">
                                                    {match.format}
                                                  </div>
                                                </td>
                                              )}
                                              {shouldShowPoints && (
                                                <td
                                                  rowSpan={pointsRowCount}
                                                  className="px-2 sm:px-6 py-4 text-xs sm:text-sm text-blue-600 text-center rules-table-merged-cell"
                                                >
                                                  <div className="whitespace-normal sm:whitespace-nowrap">
                                                    {match.points}
                                                  </div>
                                                </td>
                                              )}
                                              {shouldShowPool && (
                                                <td
                                                  rowSpan={poolRowCount}
                                                  className="px-2 sm:px-6 py-4 text-xs sm:text-sm text-gray-500 text-center rules-table-merged-cell"
                                                >
                                                  <div className="whitespace-normal sm:whitespace-nowrap">
                                                    {match.pool}
                                                  </div>
                                                </td>
                                              )}
                                            </tr>
                                          );
                                        }
                                      );
                                    })()}
                                  </tbody>
                                </table>
                              </div>
                            </div>
                            {schedule.post_description && (
                              <div className="text-gray-600 mt-6 leading-loose text-sm sm:text-base space-y-2 whitespace-pre-line">
                                {schedule.post_description
                                  .split('\n')
                                  .map((line: any, lineIndex: number) => {
                                    if (line.includes('：')) {
                                      const [label, ...valueParts] =
                                        line.split('：');
                                      const value = valueParts.join('：');
                                      return (
                                        <div
                                          key={lineIndex}
                                          className="flex flex-wrap"
                                        >
                                          <span className="font-semibold text-gray-800 mr-1">
                                            {label}：
                                          </span>
                                          <span className="font-normal">
                                            {value}
                                          </span>
                                        </div>
                                      );
                                    }
                                    return line ? (
                                      <p
                                        key={lineIndex}
                                        className="font-normal"
                                      >
                                        {line}
                                      </p>
                                    ) : (
                                      <div
                                        key={lineIndex}
                                        className="h-2"
                                      ></div>
                                    );
                                  })}
                              </div>
                            )}
                          </div>
                        )
                      )}
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
              {rules.dp_sections.map((section: any, index: number) => (
                <div key={index}>
                  {/* 添加分割线，除了第一个section */}
                  {index > 0 && (
                    <hr className="my-8 border-t border-gray-200" />
                  )}

                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                    {section.title}
                  </h3>
                  <div className="text-gray-600 mb-6 leading-loose text-sm sm:text-base space-y-2">
                    {section.content
                      .split('\n')
                      .map((line: any, lineIndex: number) => {
                        if (line.includes('：')) {
                          const [label, ...valueParts] = line.split('：');
                          const value = valueParts.join('：');
                          return (
                            <div key={lineIndex} className="flex flex-wrap">
                              <span className="font-semibold text-gray-800 mr-1">
                                {label}：
                              </span>
                              <span className="font-normal">{value}</span>
                            </div>
                          );
                        }
                        return line ? (
                          <p key={lineIndex} className="font-normal">
                            {line}
                          </p>
                        ) : (
                          <div key={lineIndex} className="h-2"></div>
                        );
                      })}
                  </div>

                  {/* 16人制比赛表格 */}
                  {section.schedule && (
                    <div className="mt-6">
                      <h4 className="text-base sm:text-lg font-semibold text-gray-800 mb-4">
                        比赛流程
                      </h4>
                      <div className="overflow-x-auto -mx-4 sm:mx-0">
                        <div className="inline-block min-w-full align-middle">
                          <table className="min-w-full divide-y divide-gray-200 bg-white">
                            <thead className="bg-gray-50">
                              <tr>
                                <th className="px-2 sm:px-6 py-3 text-center text-xs sm:text-sm font-medium text-gray-500 uppercase tracking-wider">
                                  战位
                                </th>
                                <th className="px-2 sm:px-6 py-3 text-center text-xs sm:text-sm font-medium text-gray-500 uppercase tracking-wider">
                                  局次
                                </th>
                                <th className="px-2 sm:px-6 py-3 text-center text-xs sm:text-sm font-medium text-gray-500 uppercase tracking-wider">
                                  等级限制
                                </th>
                                <th className="px-2 sm:px-6 py-3 text-center text-xs sm:text-sm font-medium text-gray-500 uppercase tracking-wider">
                                  赛制
                                </th>
                                <th className="px-2 sm:px-6 py-3 text-center text-xs sm:text-sm font-medium text-gray-500 uppercase tracking-wider">
                                  积分
                                </th>
                              </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                              {(() => {
                                let currentPosition = '';
                                let positionRowCount = 0;
                                let currentFormat = '';
                                let formatRowCount = 0;
                                let currentPoints = '';
                                let pointsRowCount = 0;

                                // 计算每个战位的行数
                                const positionCounts = section.schedule.reduce(
                                  (acc: Record<string, number>, match: any) => {
                                    acc[match.position] =
                                      (acc[match.position] || 0) + 1;
                                    return acc;
                                  },
                                  {}
                                );

                                // 计算连续相同赛制的行数
                                const formatCounts: number[] = [];
                                let tempFormat = '';
                                let tempCount = 0;
                                section.schedule.forEach(
                                  (match: any, idx: number) => {
                                    if (match.format !== tempFormat) {
                                      if (tempCount > 0) {
                                        for (let i = 0; i < tempCount; i += 1) {
                                          formatCounts.push(tempCount);
                                        }
                                      }
                                      tempFormat = match.format;
                                      tempCount = 1;
                                    } else {
                                      tempCount += 1;
                                    }
                                    if (idx === section.schedule.length - 1) {
                                      for (let i = 0; i < tempCount; i += 1) {
                                        formatCounts.push(tempCount);
                                      }
                                    }
                                  }
                                );

                                // 计算连续相同分数的行数
                                const pointsCounts: number[] = [];
                                let tempPoints = '';
                                let tempPointsCount = 0;
                                section.schedule.forEach(
                                  (match: any, idx: number) => {
                                    if (match.points !== tempPoints) {
                                      if (tempPointsCount > 0) {
                                        for (
                                          let i = 0;
                                          i < tempPointsCount;
                                          i += 1
                                        ) {
                                          pointsCounts.push(tempPointsCount);
                                        }
                                      }
                                      tempPoints = match.points;
                                      tempPointsCount = 1;
                                    } else {
                                      tempPointsCount += 1;
                                    }
                                    if (idx === section.schedule.length - 1) {
                                      for (
                                        let i = 0;
                                        i < tempPointsCount;
                                        i += 1
                                      ) {
                                        pointsCounts.push(tempPointsCount);
                                      }
                                    }
                                  }
                                );

                                return section.schedule.map(
                                  (match: any, idx: number) => {
                                    const shouldShowPosition =
                                      match.position !== currentPosition;
                                    const shouldShowFormat =
                                      match.format !== currentFormat;
                                    const shouldShowPoints =
                                      match.points !== currentPoints;

                                    if (shouldShowPosition) {
                                      currentPosition = match.position;
                                      positionRowCount =
                                        positionCounts[match.position] || 0;
                                    }

                                    if (shouldShowFormat) {
                                      currentFormat = match.format;
                                      formatRowCount = formatCounts[idx] || 1;
                                    }

                                    if (shouldShowPoints) {
                                      currentPoints = match.points;
                                      pointsRowCount = pointsCounts[idx] || 1;
                                    }

                                    return (
                                      <tr
                                        key={idx}
                                        className={
                                          idx % 2 === 0
                                            ? 'bg-white'
                                            : 'bg-gray-50'
                                        }
                                      >
                                        {shouldShowPosition && (
                                          <td
                                            rowSpan={positionRowCount}
                                            className="px-2 sm:px-6 py-4 text-xs sm:text-sm font-bold text-center text-gray-900 rules-table-merged-cell"
                                          >
                                            {match.position}
                                          </td>
                                        )}
                                        <td className="px-2 sm:px-6 py-4 text-xs sm:text-sm font-medium text-gray-900 text-center">
                                          <div className="whitespace-normal sm:whitespace-nowrap">
                                            {match.match}
                                          </div>
                                        </td>
                                        <td className="px-2 sm:px-6 py-4 text-xs sm:text-sm text-gray-500 text-center">
                                          <div className="whitespace-normal sm:whitespace-nowrap">
                                            {match.level}
                                          </div>
                                        </td>
                                        {shouldShowFormat && (
                                          <td
                                            rowSpan={formatRowCount}
                                            className="px-2 sm:px-6 py-4 text-xs sm:text-sm text-gray-500 text-center rules-table-merged-cell"
                                          >
                                            <div className="whitespace-normal sm:whitespace-nowrap">
                                              {match.format}
                                            </div>
                                          </td>
                                        )}
                                        {shouldShowPoints && (
                                          <td
                                            rowSpan={pointsRowCount}
                                            className="px-2 sm:px-6 py-4 text-xs sm:text-sm text-gray-500 text-center rules-table-merged-cell"
                                          >
                                            <div className="whitespace-normal sm:whitespace-nowrap">
                                              {match.points}
                                            </div>
                                          </td>
                                        )}
                                      </tr>
                                    );
                                  }
                                );
                              })()}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* 课题曲表格 */}
                  {section.basic_songs && (
                    <div className="mt-6">
                      <h4 className="text-base sm:text-lg font-semibold text-gray-800 mb-4">
                        常规课题曲（45%）
                      </h4>
                      <div className="overflow-x-auto -mx-4 sm:mx-0">
                        <div className="inline-block min-w-full align-middle">
                          <table className="min-w-full divide-y divide-gray-200 bg-white">
                            <thead className="bg-gray-50">
                              <tr>
                                <th className="px-2 sm:px-6 py-3 text-center text-xs sm:text-sm font-medium text-gray-500 uppercase tracking-wider">
                                  等级
                                </th>
                                <th className="px-2 sm:px-6 py-3 text-left text-xs sm:text-sm font-medium text-gray-500 uppercase tracking-wider">
                                  歌名
                                </th>
                                <th className="px-2 sm:px-6 py-3 text-center text-xs sm:text-sm font-medium text-gray-500 uppercase tracking-wider">
                                  难度
                                </th>
                                <th className="px-2 sm:px-6 py-3 text-center text-xs sm:text-sm font-medium text-gray-500 uppercase tracking-wider">
                                  版本
                                </th>
                                <th className="px-2 sm:px-6 py-3 text-center text-xs sm:text-sm font-medium text-gray-500 uppercase tracking-wider">
                                  BPM
                                </th>
                                <th className="px-2 sm:px-6 py-3 text-center text-xs sm:text-sm font-medium text-gray-500 uppercase tracking-wider">
                                  物量
                                </th>
                                <th className="px-2 sm:px-6 py-3 text-center text-xs sm:text-sm font-medium text-gray-500 uppercase tracking-wider">
                                  权重
                                </th>
                              </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                              {section.basic_songs.map(
                                (song: any, idx: number) => (
                                  <tr
                                    key={idx}
                                    className={
                                      idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                                    }
                                  >
                                    <td className="px-2 sm:px-6 py-4 text-xs sm:text-sm font-bold text-center text-gray-900">
                                      {song.level}
                                    </td>
                                    <td className="px-2 sm:px-6 py-4 text-xs sm:text-sm font-medium text-gray-900">
                                      <div className="whitespace-normal sm:whitespace-nowrap">
                                        {song.title}
                                      </div>
                                    </td>
                                    <td className="px-2 sm:px-6 py-4 text-xs sm:text-sm text-center text-gray-500">
                                      {song.difficulty}
                                    </td>
                                    <td className="px-2 sm:px-6 py-4 text-xs sm:text-sm text-center text-gray-500">
                                      <div className="whitespace-normal sm:whitespace-nowrap">
                                        {song.version}
                                      </div>
                                    </td>
                                    <td className="px-2 sm:px-6 py-4 text-xs sm:text-sm text-center text-gray-500">
                                      {song.bpm}
                                    </td>
                                    <td className="px-2 sm:px-6 py-4 text-xs sm:text-sm text-center text-gray-500">
                                      {song.notes}
                                    </td>
                                    <td className="px-2 sm:px-6 py-4 text-xs sm:text-sm text-center text-blue-600">
                                      {song.weight}
                                    </td>
                                  </tr>
                                )
                              )}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* 附加课题曲表格 */}
                  {section.additional_songs && (
                    <div className="mt-6">
                      <h4 className="text-base sm:text-lg font-semibold text-gray-800 mb-4">
                        附加课题曲（55%）
                      </h4>
                      <div className="overflow-x-auto -mx-4 sm:mx-0">
                        <div className="inline-block min-w-full align-middle">
                          <table className="min-w-full divide-y divide-gray-200 bg-white">
                            <thead className="bg-gray-50">
                              <tr>
                                <th className="px-2 sm:px-6 py-3 text-center text-xs sm:text-sm font-medium text-gray-500 uppercase tracking-wider">
                                  等级
                                </th>
                                <th className="px-2 sm:px-6 py-3 text-left text-xs sm:text-sm font-medium text-gray-500 uppercase tracking-wider">
                                  歌名
                                </th>
                                <th className="px-2 sm:px-6 py-3 text-center text-xs sm:text-sm font-medium text-gray-500 uppercase tracking-wider">
                                  难度
                                </th>
                                <th className="px-2 sm:px-6 py-3 text-center text-xs sm:text-sm font-medium text-gray-500 uppercase tracking-wider">
                                  版本
                                </th>
                                <th className="px-2 sm:px-6 py-3 text-center text-xs sm:text-sm font-medium text-gray-500 uppercase tracking-wider">
                                  BPM
                                </th>
                                <th className="px-2 sm:px-6 py-3 text-center text-xs sm:text-sm font-medium text-gray-500 uppercase tracking-wider">
                                  物量
                                </th>
                                <th className="px-2 sm:px-6 py-3 text-center text-xs sm:text-sm font-medium text-gray-500 uppercase tracking-wider">
                                  权重
                                </th>
                              </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                              {section.additional_songs.map(
                                (song: any, idx: number) => (
                                  <tr
                                    key={idx}
                                    className={
                                      idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                                    }
                                  >
                                    <td className="px-2 sm:px-6 py-4 text-xs sm:text-sm font-bold text-center text-gray-900">
                                      {song.level}
                                    </td>
                                    <td className="px-2 sm:px-6 py-4 text-xs sm:text-sm font-medium text-gray-900">
                                      <div className="whitespace-normal sm:whitespace-nowrap">
                                        {song.title}
                                      </div>
                                    </td>
                                    <td className="px-2 sm:px-6 py-4 text-xs sm:text-sm text-center text-gray-500">
                                      {song.difficulty}
                                    </td>
                                    <td className="px-2 sm:px-6 py-4 text-xs sm:text-sm text-center text-gray-500">
                                      <div className="whitespace-normal sm:whitespace-nowrap">
                                        {song.version}
                                      </div>
                                    </td>
                                    <td className="px-2 sm:px-6 py-4 text-xs sm:text-sm text-center text-gray-500">
                                      {song.bpm}
                                    </td>
                                    <td className="px-2 sm:px-6 py-4 text-xs sm:text-sm text-center text-gray-500">
                                      {song.notes}
                                    </td>
                                    <td className="px-2 sm:px-6 py-4 text-xs sm:text-sm text-center text-blue-600">
                                      {song.weight}
                                    </td>
                                  </tr>
                                )
                              )}
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
            <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6">
              {rules.sp_individual_sections.map(
                (section: any, index: number) => (
                  <div key={index}>
                    {/* 添加分割线，除了第一个section */}
                    {index > 0 && (
                      <hr className="my-8 border-t border-gray-200" />
                    )}

                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                      {section.title}
                    </h3>
                    <div className="text-gray-600 mb-6 leading-loose text-sm sm:text-base space-y-2">
                      {section.content
                        .split('\n')
                        .map((line: any, lineIndex: number) => {
                          if (line.includes('：')) {
                            const [label, ...valueParts] = line.split('：');
                            const value = valueParts.join('：');
                            return (
                              <div key={lineIndex} className="flex flex-wrap">
                                <span className="font-semibold text-gray-800 mr-1">
                                  {label}：
                                </span>
                                <span className="font-normal">{value}</span>
                              </div>
                            );
                          }
                          return line ? (
                            <p key={lineIndex} className="font-normal">
                              {line}
                            </p>
                          ) : (
                            <div key={lineIndex} className="h-2"></div>
                          );
                        })}
                    </div>

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
                )
              )}

              {/* SP课题曲表格 - 个人赛也使用相同的课题曲 */}
              <div className="mt-8">
                <hr className="my-8 border-t border-gray-200" />
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                  SP课题曲
                </h3>
                <div className="overflow-x-auto -mx-4 sm:mx-0">
                  <div className="inline-block min-w-full align-middle">
                    <table className="min-w-full divide-y divide-gray-200 bg-white">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-2 sm:px-6 py-3 text-center text-xs sm:text-sm font-medium text-gray-500 uppercase tracking-wider">
                            等级
                          </th>
                          <th className="px-2 sm:px-6 py-3 text-left text-xs sm:text-sm font-medium text-gray-500 uppercase tracking-wider">
                            歌名
                          </th>
                          <th className="px-2 sm:px-6 py-3 text-center text-xs sm:text-sm font-medium text-gray-500 uppercase tracking-wider">
                            难度
                          </th>
                          <th className="px-2 sm:px-6 py-3 text-center text-xs sm:text-sm font-medium text-gray-500 uppercase tracking-wider">
                            版本
                          </th>
                          <th className="px-2 sm:px-6 py-3 text-center text-xs sm:text-sm font-medium text-gray-500 uppercase tracking-wider">
                            BPM
                          </th>
                          <th className="px-2 sm:px-6 py-3 text-center text-xs sm:text-sm font-medium text-gray-500 uppercase tracking-wider">
                            物量
                          </th>
                          <th className="px-2 sm:px-6 py-3 text-center text-xs sm:text-sm font-medium text-gray-500 uppercase tracking-wider">
                            权重
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {rules.sp_course_songs.map((song: any, idx: number) => (
                          <tr
                            key={idx}
                            className={
                              idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                            }
                          >
                            <td className="px-2 sm:px-6 py-4 text-xs sm:text-sm font-bold text-center text-gray-900">
                              {song.level}
                            </td>
                            <td className="px-2 sm:px-6 py-4 text-xs sm:text-sm font-medium text-gray-900">
                              <div className="whitespace-normal sm:whitespace-nowrap">
                                {song.title}
                              </div>
                            </td>
                            <td className="px-2 sm:px-6 py-4 text-xs sm:text-sm text-center text-gray-500">
                              {song.difficulty}
                            </td>
                            <td className="px-2 sm:px-6 py-4 text-xs sm:text-sm text-center text-gray-500">
                              <div className="whitespace-normal sm:whitespace-nowrap">
                                {song.version}
                              </div>
                            </td>
                            <td className="px-2 sm:px-6 py-4 text-xs sm:text-sm text-center text-gray-500">
                              {song.bpm}
                            </td>
                            <td className="px-2 sm:px-6 py-4 text-xs sm:text-sm text-center text-gray-500">
                              {song.notes}
                            </td>
                            <td className="px-2 sm:px-6 py-4 text-xs sm:text-sm text-center text-blue-600">
                              {song.weight}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Rules;
