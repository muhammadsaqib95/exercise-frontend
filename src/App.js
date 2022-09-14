import React, { useContext, useEffect } from "react";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import Home from "./Components/Home";
import Login from "./Components/Login";
import {UserAuthContext} from "./context/UserAuth";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  const { userAuth } = useContext(UserAuthContext);
  
  return (
    <div className=" ">
        {
          userAuth.token ? <Home />
          : <Login />
        }
    </div>
  );
}

export default App;
