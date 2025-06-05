import React from 'react';

import config from '../config/index.json';

const Staff = () => {
  const { staff } = config;

  return (
    <div className="py-8 sm:py-16" id="staff">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 lg:text-4xl">
            {staff.title}
          </h2>
        </div>

        <div className="mt-8 sm:mt-12">
          <div className="bg-white shadow overflow-hidden sm:rounded-lg max-w-xl mx-auto">
            <div className="overflow-x-auto -mx-2 sm:mx-0">
              <div className="inline-block min-w-full align-middle">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-2 sm:px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                        昵称
                      </th>
                      <th className="px-2 sm:px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                        工作内容
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {staff.groups.map((group, groupIndex) => (
                      <React.Fragment key={groupIndex}>
                        {/* 组别标题行 */}
                        <tr className="bg-blue-50">
                          <td
                            colSpan={2}
                            className="px-2 sm:px-6 py-4 text-sm sm:text-base font-bold text-blue-900 text-center"
                          >
                            {group.name}
                          </td>
                        </tr>
                        {/* 组员行 */}
                        {group.members.map((member, memberIndex) => (
                          <tr
                            key={memberIndex}
                            className={
                              memberIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                            }
                          >
                            <td className="px-2 sm:px-6 py-3 text-xs sm:text-sm font-medium text-gray-900 text-center">
                              <div className="whitespace-normal sm:whitespace-nowrap">
                                {member.name}
                              </div>
                            </td>
                            <td className="px-2 sm:px-6 py-3 text-xs sm:text-sm text-gray-500 text-center">
                              <div className="whitespace-normal sm:whitespace-nowrap">
                                {member.role}
                              </div>
                            </td>
                          </tr>
                        ))}
                      </React.Fragment>
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

export default Staff;
