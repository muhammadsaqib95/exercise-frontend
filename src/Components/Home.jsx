import React, { Component } from "react";
import { useSelector, useDispatch } from "react-redux";
// import { increment, decrement, incrementByAmount } from "../Redux/Reducer/User";
import Lottie from 'react-lottie';
import animationData from './lottie';
import { useUserData,userProfile } from "../api/user";
import { useQuery } from "@tanstack/react-query";
import Jobs from './Jobs'
export default function Home() {
  // const {data, isLoading, error} = useUserData();
  const {data, isLoading, error} = useQuery(['userData'], userProfile);
  // console.log(data, isLoading, error);
  // const dispatch = useDispatch();
  return (
    <>
      <div>
        <div className="flex justify-between items-center px-4 md:px-12 py-4 border-b">
          <div className="font-bold text-2xl">Logo</div>
          <button className="bg-blue-500 px-3 py-1 rounded-md text-white">Logout</button>
        </div>
        <Jobs />
          {/* 
          <div>
          <Lottie 
	    options={defaultOptions}
        height={400}
        width={400}
      />
          </div> */}
      </div>
    </>
  );
}
