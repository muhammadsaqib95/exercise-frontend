import { useState, useContext } from "react";
import { UserAuthContext } from "../context/UserAuth";
import { userLogin } from "../api/user";
import { useMutation } from "@tanstack/react-query";
import { queryClient } from "../index";
export default function Login() {
  const { setUserAuth } = useContext(UserAuthContext);
  const [inputDetails, setInputDetails] = useState({
    email: "",
    password: "",
    error: "",
    loading: false,
  });

  const mutation = useMutation(userLogin, {
    onSuccess: (data) => {
      if (data.token) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("_id", data.data._id);
        setUserAuth({
          token: data.token,
        });
      } else {
        setInputDetails({
          ...inputDetails,
          error: data.message,
          loading: false,
        });
      }
      queryClient.setQueryData(["userData"], (old) => data.data);
    },
    onError: (error) => {
      setInputDetails({ ...inputDetails, error: error });
    },
  });
  
  return (
    <div className="h-screen w-full flex flex-col justify-center items-center">
      {/* <h1>Login</h1> */}
      <div className="w-80 shadow-md flex flex-col gap-2 p-5 rounded-lg">
        <div className="mx-auto mb-4">
          <svg
            width="170"
            height="60"
            viewBox="0 0 1416 354"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13 262.5L447.553 266.487C448.467 266.495 449.335 266.086 449.911 265.376L531.309 164.937C532.745 163.165 535.554 163.58 536.417 165.691L605.449 334.588C606.596 337.396 610.71 336.921 611.188 333.926L662.013 15.5749C662.535 12.3054 667.19 12.1674 667.905 15.4002L739.375 338.629C740.052 341.688 744.374 341.794 745.199 338.771L782.005 203.814C783.185 199.489 787.098 196.477 791.58 196.445L1403.5 192"
              stroke="#F01B1C"
              stroke-width="25"
              stroke-linecap="round"
            />
          </svg>
        </div>
        {inputDetails.error && (
          <div className="text-red-500 text-center text-sm">
            {inputDetails.error}
          </div>
        )}
        <input
          type="email"
          placeholder="Email"
          className="px-2 py-2 border border-gray-300 rounded-md placeholder:text-sm"
          value={inputDetails.email}
          onChange={(e) => {
            setInputDetails({
              ...inputDetails,
              email: e.target.value,
            });
          }}
        />
        <input
          type="password"
          placeholder="Password"
          className="px-2 py-2 border border-gray-300 rounded-md placeholder:text-sm"
          value={inputDetails.password}
          onChange={(e) => {
            setInputDetails({
              ...inputDetails,
              password: e.target.value,
            });
          }}
        />
        <button
          className="px-2 py-2 border border-gray-300 bg-gray-300 hover:bg-transparent text-white hover:text-black rounded-md"
          // disabled
          onClick={() => {
            mutation.mutate({
              email: inputDetails.email,
              password: inputDetails.password,
            });
          }}
        >
          Login
        </button>
      </div>
    </div>
  );
}
