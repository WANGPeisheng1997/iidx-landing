import React from 'react';

import config from '../config/index.json';

const Registration = () => {
  const { registration } = config;

  return (
    <div className="py-8 sm:py-16" id="registration">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 lg:text-4xl">
            {registration.title}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-500">
            {registration.description}
          </p>
          <div className="mt-6 bg-red-100 border border-red-400 text-red-700 px-3 sm:px-4 py-3 rounded mx-2 sm:mx-0">
            <strong>报名截止时间：</strong>
            {registration.deadline}
          </div>
        </div>

        <div className="mt-8 sm:mt-12 bg-white rounded-lg shadow-lg p-4 sm:p-6 max-w-4xl mx-auto">
          <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4">
            报名要求
          </h3>
          <ul className="list-disc list-inside space-y-2 text-gray-600 text-sm sm:text-base">
            {registration.requirements.map((requirement, index) => (
              <li key={index}>{requirement}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Registration;
