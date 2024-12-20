import {
  DataTable,
  Header,
  DiagnosisHistory,
  PatientList,
  ProfileInfo,
  LabResults,
} from "./components";
import fetchData from "./hooks/useFetchData";
import React, { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  const [patients, setPatients] = useState(null); // Initial state is null
  const [jessicaTaylor, setJessicaTaylor] = useState(null);
  const tableHeaders = ["Name", "Description", "Status"];

  useEffect(() => {
    const loadData = async () => {
      const { patientsSummary, jessicaTaylor } = await fetchData();
      setJessicaTaylor(jessicaTaylor);
      setPatients(patientsSummary);
    };

    loadData();
  }, []);

  if (patients === null || jessicaTaylor === null) {
    // You can show a loading state while the data is being fetched
    return <div>Loading...</div>;
  }

  const {
    name,
    gender,
    age,
    profile_picture,
    date_of_birth,
    phone_number,
    emergency_contact,
    insurance_type,
    diagnosis_history,
    diagnostic_list,
  } = jessicaTaylor;
  const profileData = {
    name,
    gender,
    age,
    profile_picture,
    date_of_birth,
    phone_number,
    emergency_contact,
    insurance_type,
  };

  return (
    <div className="bg-lightBg min-h-screen">
      {/* Header Component */}
      <Header />
      {/* Main Content */}
      <main className="flex mx-[9px] flex-col sm:flex-row justify-between my-4">
        {/* Left section */}
        <div className="left w-full sm:w-[45%] lg:w-[22.94%] my-1">
          <PatientList patients={patients} />
        </div>

        {/* Middle section */}
        <div className="mid w-full sm:w-[98%] lg:w-[47.88%] my-1">
          <DiagnosisHistory
            DiagnosisHistory={jessicaTaylor.diagnosis_history}
          />
          <div className="overflow-x-auto mt-4 bg-white shadow-lg rounded-lg p-4">
            <h2 className="text-2xl font-semibold mb-8">Diagnostic List</h2>
            <DataTable
              headers={tableHeaders}
              data={jessicaTaylor.diagnostic_list}
              customClass="max-h-[300px] sm:max-h-[180px] overflow-y-auto List"
            />
          </div>
        </div>

        {/* Right section */}
        <div className="right w-full sm:w-[45%] lg:w-[22.94%] my-1">
          <ProfileInfo profileInfo={profileData} />
          <LabResults
            LabResults={jessicaTaylor.lab_results}
            customClass="max-h-[300px] sm:max-h-[190px] overflow-y-auto List"
          />
        </div>
      </main>
    </div>
  );
};

export default App;
