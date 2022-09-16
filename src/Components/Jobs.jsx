import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getAlljobs } from "../api/projects";
import AddJob from "./AddJob";
import PreviewJob from './PreviewJob'

export function jobExpired(d1, d2) {
  let date1 = new Date(d1).getTime();
  let date2 = new Date().getTime();

  if (date1 < date2) {
    return true;
  } else if (date1 > date2) {
    return false;
  } else {
    return false;
  }
}

export default function Jobs() {
  const [addjob, setAddjob] = React.useState(false);
  const [jobDetails, setJobDetails] = React.useState({});
  const [previewJob, setPreviewJob] = React.useState(false);
  const { data, isLoading, error } = useQuery(["jobs"], getAlljobs);
  return (
    <>
      {addjob && (
        <AddJob
          setAddjob={setAddjob}
          jobDetails={jobDetails}
          setJobDetails={setJobDetails}
        />
      )}
      {
        previewJob && (
          <PreviewJob setPreviewJob={setPreviewJob} jobDetails={jobDetails} setJobDetails={setJobDetails} />
        )
      }
      <div className="w-1/2 mx-auto my-10">
        <div className="flex items-center justify-between">
          <h1 className="mt-4">All Jobs</h1>
          <button
            className="bg-blue-500 px-3 py-1 rounded-md text-white"
            onClick={() => setAddjob(true)}
          >
            Add new
          </button>
        </div>
        <div className="mt-2">
          {data?.map((item) => (
            <div key={item._id} className="border p-3 rounded-md my-2">
              <div className="flex items-center justify-end gap-2">
                <svg
                  width="27"
                  height="27"
                  viewBox="0 0 27 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="cursor-pointer"
                  onClick={() => {
                    setJobDetails(item);
                    setPreviewJob(true);
                  }}
                >
                  <rect width="27" height="27" rx="13.5" fill="#D9D9D9" />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M13.6794 8.99999C10.5448 8.99999 7.89184 11.0601 7.00004 13.9C7.89184 16.7399 10.5448 18.8 13.6794 18.8C16.814 18.8 19.467 16.7399 20.3588 13.9C19.467 11.0601 16.814 8.99999 13.6794 8.99999ZM15.6593 15.8799C16.1844 15.3548 16.4794 14.6426 16.4794 13.9C16.4794 13.1574 16.1844 12.4452 15.6593 11.9201C15.1342 11.395 14.422 11.1 13.6794 11.1C12.9368 11.1 12.2246 11.395 11.6995 11.9201C11.1744 12.4452 10.8794 13.1574 10.8794 13.9C10.8794 14.6426 11.1744 15.3548 11.6995 15.8799C12.2246 16.405 12.9368 16.7 13.6794 16.7C14.422 16.7 15.1342 16.405 15.6593 15.8799ZM14.6694 14.8899C14.4068 15.1525 14.0507 15.3 13.6794 15.3C13.3081 15.3 12.952 15.1525 12.6895 14.8899C12.4269 14.6274 12.2794 14.2713 12.2794 13.9C12.2794 13.5287 12.4269 13.1726 12.6895 12.91C12.952 12.6475 13.3081 12.5 13.6794 12.5C14.0507 12.5 14.4068 12.6475 14.6694 12.91C14.9319 13.1726 15.0794 13.5287 15.0794 13.9C15.0794 14.2713 14.9319 14.6274 14.6694 14.8899Z"
                    fill="#A1A1AA"
                  />
                </svg>

                <svg
                  width="27"
                  height="27"
                  viewBox="0 0 27 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="cursor-pointer"
                  onClick={() => {
                    setJobDetails(item);
                    setAddjob(true);
                  }}
                >
                  <rect width="27" height="27" rx="13.5" fill="#D9D9D9" />
                  <path
                    d="M15.8687 8.8688C16.0163 8.71599 16.1928 8.59409 16.3881 8.51024C16.5833 8.42638 16.7932 8.38225 17.0057 8.3804C17.2181 8.37855 17.4288 8.41904 17.6254 8.49949C17.8221 8.57994 18.0007 8.69874 18.1509 8.84897C18.3012 8.9992 18.42 9.17784 18.5004 9.37448C18.5809 9.57111 18.6214 9.7818 18.6195 9.99424C18.6177 10.2067 18.5735 10.4166 18.4897 10.6118C18.4058 10.8071 18.2839 10.9836 18.1311 11.1312L17.4967 11.7656L15.2343 9.5032L15.8687 8.8688V8.8688ZM14.1031 10.6344L7.3999 17.3376V19.6H9.6623L16.3663 12.8968L14.1023 10.6344H14.1031Z"
                    fill="#A1A1AA"
                  />
                </svg>
              </div>
              <div>
                <h1 className="font-semibold text-xl line-clamp-1">{item.title}</h1>
                <small>{item.job_type}</small>
                {jobExpired(item.expire_on) ? (
                  <small className="text-red-500"> Expired</small>
                ) : (
                  <small className="text-green-500"> Active</small>
                )}
                <p className="line-clamp-2">{item.description.replace(/<[^>]+>/g, "")}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
