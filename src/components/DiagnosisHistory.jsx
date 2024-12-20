import React from "react";
import { Line } from "react-chartjs-2";
import temperature from "../assets/temperature.svg";
import respiratoryrate from "../assets/respiratoryrate.svg";
import HeartBPM from "../assets/HeartBPM.svg";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Registering the necessary components of Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

// DiagnosisHistory Component
const DiagnosisHistory = ({ DiagnosisHistory }) => {
  // Sort data by year and month to ensure correct order
  const sortedData = [...DiagnosisHistory].sort((a, b) => {
    const aDate = new Date(a.year, new Date(`${a.month} 1`).getMonth());
    const bDate = new Date(b.year, new Date(`${b.month} 1`).getMonth());
    return bDate - aDate; // Sort in descending order (most recent first)
  });

  // Get the most recent 6 months of data
  const last6MonthsData = sortedData.slice(0, 6);

  // Prepare data for the chart
  const labels = last6MonthsData.map((item) => `${item.month} ${item.year}`);

  // Map systolic and diastolic data as objects with value and levels
  const systolicData = last6MonthsData.map((item) => ({
    value: item.blood_pressure.systolic.value,
    level: item.blood_pressure.systolic.levels,
  }));

  const diastolicData = last6MonthsData.map((item) => ({
    value: item.blood_pressure.diastolic.value,
    level: item.blood_pressure.diastolic.levels,
  }));

  const heartRateData = last6MonthsData.map((item) => ({
    value: item.heart_rate.value,
    level: item.heart_rate.levels,
  }));

  const respiratoryRateData = last6MonthsData.map((item) => ({
    value: item.respiratory_rate.value,
    level: item.respiratory_rate.levels,
  }));

  const temperatureData = last6MonthsData.map((item) => ({
    value: item.temperature.value,
    level: item.temperature.levels,
  }));

  // Chart Data based on dynamic data
  const data = {
    labels: labels,
    datasets: [
      {
        data: systolicData.map((data) => data.value),
        borderColor: "#7E6CAB",
        backgroundColor: "#7E6CAB",
        tension: 0.3,
        borderWidth: 2,
        pointBackgroundColor: "#7E6CAB",
        pointBorderColor: "#7E6CAB",
        pointRadius: 5,
        pointHoverBackgroundColor: "#7E6CAB",
        pointHoverBorderColor: "#7E6CAB",
      },
      {
        data: diastolicData.map((data) => data.value),
        borderColor: "#E66FD2",
        backgroundColor: "#E66FD2",
        fill: true,
        tension: 0.3,
        borderWidth: 2,
        pointBackgroundColor: "#E66FD2",
        pointBorderColor: "#E66FD2",
        pointRadius: 5,
        pointHoverBackgroundColor: "#E66FD2",
        pointHoverBorderColor: "#E66FD2",
      },
    ],
  };

  // Chart options
  const options = {
    responsive: true,
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          font: {
            size: 12,
          },
        },
      },
      y: {
        min: 60,
        max: 180,
        grid: {
          drawBorder: false,
        },
        ticks: {
          font: {
            size: 12,
          },
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        mode: "nearest",
        intersect: false,
      },
    },
  };

  // Get most recent month data
  const latestData = last6MonthsData[0];

  return (
    <div className="bg-white text-txtColor shadow-lg rounded-lg p-6 ">
      <div className="Header font-semibold text-lg mb-3">Diagnosis History</div>
      {/* Blood Pressure Section */}
      <div className="flex bg-gray-200 rounded-md my-3">
        {/* Left Section (76% width) */}
        <div style={{ width: "76%" }}>
          <div className="flex justify-between items-center p-4">
            <div className="text-left font-semibold text-xl">
              Blood Pressure
            </div>
            <div className="text-right">
              <select className="bg-transparent p-0 m-0" defaultValue="6month">
                <option value="6month">Last 6 months</option>
                <option value="1month">1 Month</option>
                <option value="1year">1 Year</option>
              </select>
            </div>
          </div>
          <Line data={data} options={options} />
        </div>

        {/* Right Section (23% width) */}
        <div style={{ width: "23%" }}>
          <div className="border-b-2 border-b-black pb-4">
            <div className="flex items-center space-x-2">
              <span className="w-3 h-3 bg-[#E66FD2] rounded-full"></span>
              <div className="font-semibold">Systolic</div>
            </div>
            <div className="text-lg">
              {systolicData[systolicData.length - 1].value}
            </div>
            <div className="text-sm text-gray-600">
              {systolicData[systolicData.length - 1].level}
            </div>
          </div>
          <div className="mt-4">
            <div className="flex items-center space-x-2">
              <span className="w-3 h-3 bg-[#7E6CAB] rounded-full"></span>
              <div className="font-semibold">Diastolic</div>
            </div>
            <div className="text-lg">
              {diastolicData[diastolicData.length - 1].value}
            </div>
            <div className="text-sm text-gray-600">
              {diastolicData[diastolicData.length - 1].level}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section (Vitals Information) */}
      <div className="flex justify-between items-center mt-6 space-x-4">
        {/* Respiratory Rate Card */}
        <div className="bg-[#E0F3FA] p-4 rounded-md w-1/3">
          <div className="flex justify-start">
            <img
              src={respiratoryrate}
              alt="Respiratory Rate"
              className="h-50 w-50"
            />
          </div>
          <div>Respiratory Rate</div>
          <div className="text-lg font-bold">
            {respiratoryRateData[respiratoryRateData.length - 1].value}bpm
          </div>
          <div className="mt-2 text-lg">
            {respiratoryRateData[respiratoryRateData.length - 1].level}
          </div>
        </div>
        {/* Temperature Card */}
        <div className="bg-[#FFE6E9] p-4 rounded-md w-1/3">
          <div className="flex justify-start">
            <img src={temperature} alt="Temprature" className="h-50 w-50" />
          </div>
          <div>Temperature</div>
          <div className="text-lg font-bold">
            {temperatureData[temperatureData.length - 1].value}°F
          </div>
          <div className="mt-2 text-lg">
            {temperatureData[temperatureData.length - 1].level}
          </div>
        </div>
        {/* Heart Rate Card */}
        <div className="bg-[#FFE6F1] p-4 rounded-md w-1/3">
          <div className="flex justify-start">
            <img src={HeartBPM} alt="Heart Rate" className="h-50 w-50" />
          </div>
          <div>Heart Rate</div>
          <div className="text-lg font-bold">
            {heartRateData[heartRateData.length - 1].value}bpm
          </div>
          <div className="mt-2 text-lg">
            {heartRateData[heartRateData.length - 1].level}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiagnosisHistory;
