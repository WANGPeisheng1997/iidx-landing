import React from 'react';

import config from '../config/index.json';

const Staff = () => {
  const { staff } = config;

  return (
    <div className="py-8 sm:py-16" id="staff">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 lg:text-4xl">
            {staff.title}
          </h2>
        </div>

        <div className="mt-8 sm:mt-12">
          <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="overflow-x-auto -mx-2 sm:mx-0">
              <div className="inline-block min-w-full align-middle">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-2 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        姓名
                      </th>
                      <th className="px-2 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        职责
                      </th>
                      <th className="px-2 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        联系方式
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {staff.members.map((member, index) => (
                      <tr
                        key={index}
                        className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
                      >
                        <td className="px-2 sm:px-6 py-4 text-xs sm:text-sm font-medium text-gray-900">
                          <div className="whitespace-normal sm:whitespace-nowrap">
                            {member.name}
                          </div>
                        </td>
                        <td className="px-2 sm:px-6 py-4 text-xs sm:text-sm text-gray-500">
                          <div className="whitespace-normal sm:whitespace-nowrap">
                            {member.role}
                          </div>
                        </td>
                        <td className="px-2 sm:px-6 py-4 text-xs sm:text-sm text-gray-500">
                          <div className="whitespace-normal sm:whitespace-nowrap">
                            <a
                              href={`mailto:${member.contact}`}
                              className="text-blue-600 hover:text-blue-900 break-all sm:break-normal"
                            >
                              {member.contact}
                            </a>
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
  );
};

export default Staff;
