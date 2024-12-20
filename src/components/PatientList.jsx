import React from "react";
import search_FILL0_wght300_GRAD0_opsz24 from "../assets/search_FILL0_wght300_GRAD0_opsz24.svg";
import more_horiz_FILL0_wght300_GRAD0_opsz24 from "../assets/more_horiz_FILL0_wght300_GRAD0_opsz24.svg";

const PatientList = ({ patients }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 max-h-[400px] sm:max-h-[945px] overflow-y-auto  overflow-x-hidden List">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-gray-800">Patients</h2>
        <button>
          <img
            src={search_FILL0_wght300_GRAD0_opsz24}
            alt="Search"
            className="h-5 w-5"
          />
        </button>
      </div>

      {/* Patient List */}
      <div className="space-y-4">
        {patients.map((patient, index) => (
          <div
            key={index}
            className="flex items-center justify-between border-b pb-3 last:border-b-0"
          >
            {/* Profile Image and Details */}
            <div className="flex items-center space-x-4">
              <img
                src={patient.profile_picture}
                alt={patient.name}
                className="h-12 w-12 rounded-full object-cover"
              />
              <div>
                <h3 className="text-sm font-medium text-gray-800">
                  {patient.name}
                </h3>
                <p className="text-sm text-gray-500">
                  {patient.gender}, {patient.age} years
                </p>
              </div>
            </div>

            <button>
              <img
                src={more_horiz_FILL0_wght300_GRAD0_opsz24}
                alt="More"
                className="h-5 w-5"
              />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PatientList;
