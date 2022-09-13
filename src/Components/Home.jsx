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
  
        <h1>Home</h1>
        <hr className="w-10" />
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
