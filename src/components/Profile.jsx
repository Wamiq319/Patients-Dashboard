import React from "react";
import BirthIcon from "../assets/BirthIcon.svg";
import FemaleIcon from "../assets/FemaleIcon.svg";
import PhoneIcon from "../assets/PhoneIcon.svg";
import InsuranceIcon from "../assets/InsuranceIcon.svg";

const ProfileInfo = ({ profileInfo }) => {
  const {
    profile_picture,
    name,
    date_of_birth,
    gender,
    age,
    phone_number,
    emergency_contact,
    insurance_type,
  } = profileInfo;

  // Array of profile details for easy mapping
  const profileDetails = [
    { label: "Date of Birth", value: date_of_birth, Icon: BirthIcon },
    { label: "Gender", value: gender, Icon: FemaleIcon },
    { label: "Phone Number", value: phone_number, Icon: PhoneIcon },
    { label: "Emergency Contact", value: emergency_contact, Icon: PhoneIcon },
    { label: "Insurance Type", value: insurance_type, Icon: InsuranceIcon },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto">
      {/* Profile Picture */}
      <div className="flex justify-center mb-6">
        <img
          src={profile_picture}
          alt={name}
          className="w-44 h-44 rounded-full border-2 border-gray-300"
        />
      </div>

      {/* Profile Information */}
      <div className="space-y-3">
        {/* Profile Name */}
        <div className="font-semibold text-xl text-gray-800 text-center">
          {name}
        </div>

        {/* Map through the profile details */}
        {profileDetails.map((detail, index) => (
          <div key={index} className="text-txtColor space-x-2 flex">
            <img src={detail.Icon} alt={detail.label} />
            <span>
              <div className="text-sm t">{detail.label}</div>
              <div className="ml-auto text-sm font-semibold ">
                {detail.value}
              </div>
            </span>
          </div>
        ))}
      </div>
      {/* Profile Information */}
      <div className="flex justify-center mt-2">
        <button className="rounded-full px-6 py-3 font-semibold text-sm bg-btnColor">
          Show All Information
        </button>
      </div>
    </div>
  );
};

export default ProfileInfo;
