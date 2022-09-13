import React from "react";

export default function AddJob() {
  return (
    <div className="fixed top-0 left-0 h-screen w-screen bg-gray-400 bg-opacity-60 flex justify-center ">
      <div className="bg-white w-11/12 md:w-3/4 h-max p-3 rounded-md mt-10">
        <div className="w-full flex justify-between items-center">
            <h2>Add Job</h2>
        </div>
        <div className="w-max p-1 border rounded-full float-right">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 6L18 18M6 18L18 6L6 18Z"
              stroke="#3F3F46"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
