import { createContext, useState} from "react";

export const UserAuthContext = createContext();


export default function UserAuth ({ children }) {
    const [userAuth, setUserAuth] = useState({
        token: localStorage.getItem("token"),
    });
  return (
    <UserAuthContext.Provider value={{userAuth,setUserAuth}}>
      {children}
    </UserAuthContext.Provider>
  );
}