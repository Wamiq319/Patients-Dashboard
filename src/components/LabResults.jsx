import React from "react";
import download_FILL0_wght300_GRAD0_opsz24 from "../assets/download_FILL0_wght300_GRAD0_opsz24.svg";

const LabResults = ({ LabResults, customClass }) => {
  return (
    <div className="overflow-x-auto mt-4 bg-white shadow-lg rounded-lg p-4">
      {/* Lab Results Header */}
      <h2 className="text-2xl font-semibold mb-8">Lab Results</h2>
      {/* Lab Results List */}
      <div className={` rounded-lg p-6 mt-10 ${customClass}`}>
        <div className="space-y-4">
          {LabResults.map((result, index) => (
            <div
              key={index}
              className="flex items-center justify-between  pb-3 "
            >
              {/* Lab result name on the left */}
              <div className="flex items-center space-x-4">
                <h3 className="text-sm font-medium text-gray-800">{result}</h3>
              </div>

              {/* Download Icon on the right */}
              <button className="text-blue-500 hover:text-blue-700">
                <img
                  src={download_FILL0_wght300_GRAD0_opsz24}
                  alt="download"
                  className="h-5 w-5"
                />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LabResults;
