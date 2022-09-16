import React from "react";
import { useEffect } from "react";
import { jobExpired } from "./Jobs";
var options = {
  year: "numeric",
  month: "short",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
  weekday: "short",
};

export default function PreviewJob({
  setPreviewJob,
  jobDetails,
  setJobDetails,
}) {
  const created_on = new Date(jobDetails.date).toLocaleDateString(
    "en-US",
    options
  );
  useEffect(() => {
    document.getElementsByTagName("body")[0].style.overflow = "hidden";
    return () => {
      document.getElementsByTagName("body")[0].style.overflow = "unset";
    };
  }, []);

  return (
    <>
      <div className="fixed top-0 left-0 h-screen w-screen bg-gray-400 bg-opacity-60 flex justify-center overflow-y-auto">
        <div className="bg-white w-11/12 md:w-3/4 h-max p-3 rounded-md mt-10">
          <div className="w-full flex justify-between items-center border-b pb-2">
            <h2 className="font-xl font-semibold text-gray-800">Job Preview</h2>
            <svg
              width="27"
              height="27"
              viewBox="0 0 27 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="cursor-pointer"
              onClick={() => {
                setPreviewJob(false);
                setJobDetails({});
              }}
            >
              <rect width="27" height="27" rx="13.5" fill="#D9D9D9" />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M8.24399 9.25441C8.40026 9.09818 8.61218 9.01042 8.83315 9.01042C9.05412 9.01042 9.26604 9.09818 9.42231 9.25441L12.9998 12.8319L16.5773 9.25441C16.6541 9.17481 16.7461 9.11133 16.8478 9.06766C16.9494 9.02398 17.0588 9.00099 17.1694 9.00003C17.2801 8.99907 17.3898 9.02015 17.4922 9.06205C17.5946 9.10396 17.6877 9.16583 17.7659 9.24408C17.8442 9.32232 17.906 9.41536 17.9479 9.51778C17.9898 9.62019 18.0109 9.72992 18.01 9.84057C18.009 9.95122 17.986 10.0606 17.9423 10.1622C17.8987 10.2639 17.8352 10.3559 17.7556 10.4327L14.1781 14.0102L17.7556 17.5877C17.9074 17.7449 17.9914 17.9554 17.9895 18.1738C17.9876 18.3923 17.8999 18.6014 17.7454 18.7559C17.5909 18.9104 17.3819 18.998 17.1634 18.9999C16.9449 19.0018 16.7344 18.9178 16.5773 18.766L12.9998 15.1885L9.42231 18.766C9.26515 18.9178 9.05464 19.0018 8.83615 18.9999C8.61765 18.998 8.40864 18.9104 8.25414 18.7559C8.09963 18.6014 8.01199 18.3923 8.01009 18.1738C8.00819 17.9554 8.09219 17.7449 8.24399 17.5877L11.8215 14.0102L8.24399 10.4327C8.08776 10.2765 8 10.0645 8 9.84357C8 9.6226 8.08776 9.41068 8.24399 9.25441V9.25441Z"
                fill="#A1A1AA"
              />
            </svg>
          </div>
          <div>
            <div className="mt-4">
              <div className="flex flex-col">
                <h1 className="font-semibold text-2xl">{jobDetails.title}</h1>
                <h3>created on : <span className="text-sm font-normal">{created_on} </span></h3>
                <h3>
                  status :&nbsp;
                  {jobExpired(jobDetails.expire_on) ? (
                    <small className="text-red-500 font-normal"> Expired</small>
                  ) : (
                    <small className="text-green-500 font-normal"> Active</small>
                  )}
                </h3>
                <h3>Job type : <span className="text-sm font-normal capitalize">{jobDetails.job_type.split('_').join(' ')}</span></h3>
                <h3>Description :</h3>
                <hr />
                <div
                className="mt-2"
                  dangerouslySetInnerHTML={{
                    __html: jobDetails.description,
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
