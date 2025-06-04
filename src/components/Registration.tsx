import React from 'react';

import config from '../config/index.json';

const Registration = () => {
  const { registration } = config;

  return (
    <div className="py-16 bg-gray-50" id="registration">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            {registration.title}
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            {registration.description}
          </p>
          <div className="mt-6 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
            <strong>报名截止时间：</strong>
            {registration.deadline}
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {registration.methods.map((method, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {method.type}
              </h3>
              <p className="text-gray-600 mb-4">{method.content}</p>

              {method.image && (
                <div className="flex justify-center mb-4">
                  <img
                    src={method.image}
                    alt={method.type}
                    className="w-48 h-48 object-cover border border-gray-300 rounded"
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
                    className="inline-block bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors"
                  >
                    前往填写
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4">报名要求</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
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
