import React from "react";

const ProfileInfo = ({ profileInfo }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto">
      {/* Profile Picture */}
      <div className="flex justify-center mb-6">
        <img
          src={profileInfo.profile_picture} // Accessing the profile picture directly from profileInfo
          alt={profileInfo.name} // Using the name as alt text for the image
          className="w-32 h-32 rounded-full border-2 border-gray-300"
        />
      </div>

      {/* Profile Information */}
      <div className="space-y-6">
        {/* Name */}
        <div className="flex items-center">
          <div className="font-semibold text-xl text-gray-800">
            {profileInfo.name}
          </div>
        </div>

        {/* Date of Birth */}
        <div className="flex items-center space-x-2">
          <div className="text-sm text-gray-600">Date of Birth</div>
          <div className="ml-auto text-sm text-gray-800">
            {profileInfo.date_of_birth}
          </div>
        </div>
        <hr className="my-2 border-gray-200" />

        {/* Gender */}
        <div className="flex items-center space-x-2">
          <div className="text-sm text-gray-600">Gender</div>
          <div className="ml-auto text-sm text-gray-800">
            {profileInfo.gender}
          </div>
        </div>
        <hr className="my-2 border-gray-200" />

        {/* Age */}
        <div className="flex items-center space-x-2">
          <div className="text-sm text-gray-600">Age</div>
          <div className="ml-auto text-sm text-gray-800">{profileInfo.age}</div>
        </div>
        <hr className="my-2 border-gray-200" />

        {/* Phone Number */}
        <div className="flex items-center space-x-2">
          <div className="text-sm text-gray-600">Phone Number</div>
          <div className="ml-auto text-sm text-gray-800">
            {profileInfo.phone_number}
          </div>
        </div>
        <hr className="my-2 border-gray-200" />

        {/* Emergency Contact */}
        <div className="flex items-center space-x-2">
          <div className="text-sm text-gray-600">Emergency Contact</div>
          <div className="ml-auto text-sm text-gray-800">
            {profileInfo.emergency_contact}
          </div>
        </div>
        <hr className="my-2 border-gray-200" />

        {/* Insurance Type */}
        <div className="flex items-center space-x-2">
          <div className="text-sm text-gray-600">Insurance Type</div>
          <div className="ml-auto text-sm text-gray-800">
            {profileInfo.insurance_type}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
