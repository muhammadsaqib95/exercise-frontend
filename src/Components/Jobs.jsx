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
  const { data, isLoading, error } = useQuery(["jobs"], getAlljobs);
  return (
    <>
    {
        addjob && <AddJob setAddjob={setAddjob} />
    }
      <div className="w-1/2 mx-auto">
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
            <div key={item._id} className="border p-3 rounded-md">
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
