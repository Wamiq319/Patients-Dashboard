import React from "react";

const DataTable = ({ headers, data, customClass }) => {
  return (
    <>
      <div className="overflow-hidden">
        <div className="bg-gray-100 rounded-full">
          <table className="min-w-full table-auto">
            {/* Table Header */}
            <thead>
              {" "}
              {/* Rounded corners on the entire header */}
              <tr>
                {headers.map((header, index) => (
                  <th
                    key={index}
                    className="px-4 py-2 text-left font-semibold text-sm text-gray-700"
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
          </table>
        </div>

        {/* Table Body with Scroll and Dynamic Height */}
        <div className={customClass}>
          <table className="min-w-full table-auto">
            <tbody>
              {data.map((row, rowIndex) => (
                <tr key={rowIndex}>
                  {Object.values(row).map((cell, cellIndex) => (
                    <td
                      key={cellIndex}
                      className="px-4 py-2 text-sm text-gray-700"
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default DataTable;
