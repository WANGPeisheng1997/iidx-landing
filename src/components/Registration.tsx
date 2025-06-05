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

        <div className="mt-8 sm:mt-12 grid grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-3">
          {registration.methods.map((method, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-4 sm:p-6"
            >
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4">
                {method.type}
              </h3>
              <p className="text-gray-600 mb-4 text-sm sm:text-base">
                {method.content}
              </p>

              {method.image && (
                <div className="flex justify-center mb-4">
                  <img
                    src={method.image}
                    alt={method.type}
                    className="w-32 h-32 sm:w-48 sm:h-48 object-contain border border-gray-300 rounded"
                    onError={(e) => {
                      e.currentTarget.src = '/assets/images/logo.png';
                    }}
                  />
                </div>
              )}

              {method.link && (
                <div className="text-center">
                  <a
                    href={method.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-blue-600 text-white px-4 sm:px-6 py-2 rounded-md hover:bg-blue-700 transition-colors text-sm sm:text-base"
                  >
                    前往填写
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-8 sm:mt-12 bg-white rounded-lg shadow-lg p-4 sm:p-6">
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
