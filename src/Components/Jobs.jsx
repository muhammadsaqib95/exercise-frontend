import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getAlljobs } from "../api/projects";
import AddJob from "./AddJob";

function jobExpired(d1, d2) {
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
  const { data, isLoading, error } = useQuery(["jobs"], getAlljobs);
  return (
    <>
      {addjob && <AddJob setAddjob={setAddjob} jobDetails={jobDetails} setJobDetails={setJobDetails} />}
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
                <h1>{item.title}</h1>
                <p>{item.description}</p>
                <small>{item.job_type}</small>
                {jobExpired(item.expire_on) ? (
                  <small className="text-red-500"> Expired</small>
                ) : (
                  <small className="text-green-500"> Active</small>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
