import React from "react";
import { useMutation } from "@tanstack/react-query";
import { addJob, updateJob, deleteJob } from "../api/projects";
import { queryClient } from "../index";
import TextEditor from "./TextEditor";
import { useEffect } from "react";
export default function AddJob({ setAddjob, jobDetails, setJobDetails }) {
  const [deleteConfirm, setDeleteConfirm] = React.useState(false);
  const [inputDetails, setInputDetails] = React.useState({
    title: jobDetails.title ?? "",
    description: jobDetails.description ?? "",
    job_type: jobDetails.job_type ?? "on_site",
    expire_on: jobDetails.expire_on ? jobDetails.expire_on.split("T")[0] : "",
  });
  useEffect(() => {
    document.getElementsByTagName("body")[0].style.overflow = "hidden";
    return () => {
      document.getElementsByTagName("body")[0].style.overflow = "unset";
    }

  },[])
  const mutation = useMutation(addJob, {
    onSuccess: (data) => {
      if (data.title) {
        queryClient.setQueryData(["jobs"], (oldData) => {
          return [...oldData, data];
        });
        setAddjob(false);
      } else {
        alert("Something went wrong");
      }
    },
    onError: (error) => {
      console.log(error);
      setAddjob(false);
    },
  });

  const updateMutation = useMutation(updateJob, {
    onSuccess: (data) => {
      if (data.title) {
        queryClient.setQueryData(["jobs"], (oldData) => {
          return oldData.map((job) => {
            if (job._id === data._id) {
              return data;
            } else {
              return job;
            }
          });
        });
        setAddjob(false);
        setJobDetails({});
      } else {
        alert("Something went wrong");
      }
    },
    onError: (error) => {
      console.log(error);
      setAddjob(false);
      setJobDetails({});
    },
  });

  const deleteMutation = useMutation(deleteJob, {
    onSuccess: (data) => {
      if (data.id) {
        queryClient.setQueryData(["jobs"], (oldData) => {
          return oldData.filter((job) => job._id !== data.id);
        });
        setAddjob(false);
        setJobDetails({});
      } else {
        alert("Something went wrong");
      }
    },
    onError: (error) => {
      console.log(error);
      setAddjob(false);
      setJobDetails({});
    },
  });
console.log(jobDetails);
  return (
    <>
      {deleteConfirm && (
        <div className="fixed z-[100] top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
          <div className="w-96 bg-white rounded-lg p-5">
            <div className="flex justify-between items-center">
              <h1 className="text-2xl font-semibold">
                Are you sure you want to delete this job?
              </h1>
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="cursor-pointer"
                onClick={() => setAddjob(false)}
              >
                <rect width="40" height="40" rx="20" fill="#D9D9D9" />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M13.3656 13.3812C13.5998 13.1471 13.9174 13.0156 14.2485 13.0156C14.5796 13.0156 14.8972 13.1471 15.1313 13.3812L20.4922 18.7421L25.853 13.3812C25.9682 13.262 26.106 13.1668 26.2584 13.1014C26.4107 13.0359 26.5746 13.0015 26.7404 13C26.9062 12.9986 27.0706 13.0302 27.2241 13.093C27.3776 13.1558 27.517 13.2485 27.6343 13.3657C27.7515 13.483 27.8442 13.6224 27.907 13.7759C27.9698 13.9294 28.0014 14.0938 28 14.2596C27.9985 14.4254 27.9641 14.5893 27.8986 14.7416C27.8332 14.894 27.738 15.0318 27.6188 15.1469L22.2579 20.5078L27.6188 25.8687C27.8462 26.1042 27.9721 26.4196 27.9693 26.747C27.9664 27.0744 27.8351 27.3876 27.6036 27.6192C27.372 27.8507 27.0588 27.982 26.7314 27.9849C26.404 27.9877 26.0886 27.8619 25.853 27.6344L20.4922 22.2735L15.1313 27.6344C14.8958 27.8619 14.5804 27.9877 14.253 27.9849C13.9256 27.982 13.6124 27.8507 13.3808 27.6192C13.1493 27.3876 13.018 27.0744 13.0151 26.747C13.0123 26.4196 13.1381 26.1042 13.3656 25.8687L18.7265 20.5078L13.3656 15.1469C13.1315 14.9128 13 14.5952 13 14.2641C13 13.933 13.1315 13.6154 13.3656 13.3812V13.3812Z"
                  fill="#A1A1AA"
                />
              </svg>
            </div>
            <hr className="my-5" />
            <div className="">
              <p>
                By deleting this post all related data will be deleted. This
                action cannot be undone.
              </p>
            </div>
            <hr className="my-5" />
            <div className="flex justify-end">
              <button
                onClick={() => {
                  deleteMutation.mutate({id: jobDetails._id});
                }}
                className="bg-red-500 text-white px-5 py-2 rounded-lg"
              >
                Delete
              </button>
              <button
                onClick={() => setDeleteConfirm(false)}
                className="bg-[#D9D9D9] text-black px-5 py-2 rounded-lg ml-5"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="fixed top-0 left-0 h-screen w-screen bg-gray-400 bg-opacity-60 flex justify-center overflow-y-auto">
        <div className="bg-white w-11/12 md:w-3/4 h-max p-3 rounded-md mt-10">
          <div className="w-full flex justify-between items-center border-b pb-2">
            <h2 className="font-xl font-semibold text-gray-800">
              {jobDetails.title ? "Update Job" : "Add Job"}
            </h2>
            <svg
              width="27"
              height="27"
              viewBox="0 0 27 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="cursor-pointer"
              onClick={() => {
                setAddjob(false);
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
                <div className="flex flex-col">
                  <label
                    htmlFor="title"
                    className="text-gray-800 font-semibold"
                  >
                    Title
                  </label>
                  <input
                    type="text"
                    name="title"
                    id="title"
                    className="border p-2 rounded-md mt-2"
                    value={inputDetails.title}
                    onChange={(e) => {
                      setInputDetails({
                        ...inputDetails,
                        title: e.target.value,
                      });
                    }}
                  />
                </div>
                <div className="mt-4 flex flex-col">
                  <label
                    htmlFor="description"
                    className="text-gray-800 font-semibold"
                  >
                    Description
                  </label>
                  <TextEditor setvalue={(value) => {
                    console.log(value);
                      setInputDetails({
                        ...inputDetails,
                        description: value,
                      });
                    }} value={inputDetails.description} />
                  {/* <textarea
                    name="description"
                    id="description"
                    className="border p-2 rounded-md mt-2"
                    value={inputDetails.description}
                    onChange={(e) => {
                      setInputDetails({
                        ...inputDetails,
                        description: e.target.value,
                      });
                    }}
                  /> */}
                </div>
                <div className="mt-4 flex flex-col">
                  <label
                    htmlFor="job_type"
                    className="text-gray-800 font-semibold"
                  >
                    Job Type
                  </label>
                  <select
                    name="job_type"
                    id="job_type"
                    className="border p-2 rounded-md mt-2"
                    value={inputDetails.job_type}
                    onChange={(e) => {
                      setInputDetails({
                        ...inputDetails,
                        job_type: e.target.value,
                      });
                    }}
                  >
                    <option value="on_site">on Site</option>
                    <option value="remote">remote</option>
                    <option value="hybrid">hybrid</option>
                  </select>
                </div>
                <div className="mt-4 flex flex-col">
                  <label
                    htmlFor="expire_on"
                    className="text-gray-800 font-semibold"
                  >
                    Expire On
                  </label>
                  <input
                    type="date"
                    name="expire_on"
                    id="expire_on"
                    className="border p-2 rounded-md mt-2"
                    value={inputDetails.expire_on}
                    onChange={(e) => {
                      setInputDetails({
                        ...inputDetails,
                        expire_on: e.target.value,
                      });
                    }}
                  />
                </div>
                <div className="mt-4 flex flex-row gap-3 items-center">
                  <button
                    className="bg-blue-500 px-3 py-1 rounded-md text-white w-full md:w-max"
                    onClick={() => {
                      if (
                        inputDetails.title &&
                        inputDetails.description &&
                        inputDetails.expire_on
                      ) {
                        if (jobDetails.title) {
                          updateMutation.mutate({
                            id: jobDetails._id,
                            ...inputDetails,
                          });
                        } else {
                          mutation.mutate(inputDetails);
                        }
                      } else {
                        alert("Please fill all the fields");
                      }
                    }}
                  >
                    {jobDetails.title ? "Update Job" : "Add Job"}
                  </button>
                  {jobDetails.title && (
                    <button
                      className="bg-red-500 px-3 py-1 rounded-md text-white w-full md:w-max"
                      onClick={() => {
                        // deleteMutation.mutate({id: jobDetails._id})
                        setDeleteConfirm(true);
                      }}
                    >
                      Delete Job
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
