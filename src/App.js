import React, { useState } from "react";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import { Calendar } from "react-modern-calendar-datepicker";
import ChartComp from "./Components/ChartComp";
import Login from "./Components/Login";
import Test from "./Components/Test";
// import { useQuery } from "@tanstack/react-query";

// function getClothes() {
//   return fetch("https://fakestoreapi.com/products/").then((res) => res.json());
// }
function getDaysInMonth(year, month) {
  return new Date(year, month, 0).getDate();
}
function disbaledDaysCal (date) {
  const currentday = date.getDate();
  const des = [];
  for (let index = 1; index <= (getDaysInMonth(date.getFullYear(), date.getMonth() + 1) - currentday); index++) {
   des.push({
    year:  date.getFullYear(),
    month: date.getMonth() + 1,
    day: currentday + index,
    });
  }
  return des;
}

function App() {
  const date = new Date();
  // const query = useQuery(["clothes"], getClothes);
  // console.log(query.data)
  const defaultFrom = {
    year: date.getFullYear(),
    month: date.getMonth() + 1,
    day: 1,
  };

  const defaultTo = {
    year: date.getFullYear(),
    month: date.getMonth() + 1,
    day: date.getDate(),
  };
  

  const defaultRange = {
    from: defaultFrom,
    to: defaultTo,
  };

  const [selectedDayRange, setSelectedDayRange] = useState(defaultRange);
  return (
    <div className=" ">
      {/* <h1 className="text-center">Practice excercise UI</h1> */}
      <div className="flex flex-wrap justify-center max-w-screen-xl mx-auto">
        {/* <Calendar
          value={selectedDayRange}
          onChange={setSelectedDayRange}
          colorPrimary="rgba(75, 207, 250, 0.4)" // added this
          colorPrimaryLight="rgba(75, 207, 250, 0.4)" // and this
          calendarRangeStartClassName="!text-blue-500 font-bold" // added this
          calendarRangeEndClassName="!text-blue-500 font-bold" // added this
          calendarRangeBetweenClassName="!text-white"
          // disabledDays={disbaledDaysCal(date)}
          shouldHighlightWeekends
        /> */}
        {/* <ChartComp /> */}
        {/* <Login /> */}
        <Test />

      </div>
    </div>
  );
}

export default App;
