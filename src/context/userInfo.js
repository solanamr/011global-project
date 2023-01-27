import { createContext, useState } from "react";

export const userInfoContext = createContext();

export const UserInfoProvider = ({ children }) =>{

    const [userInfo, setUserInfo] = useState([])
    return (
        <userInfoContext.Provider
          value={{ userInfo, setUserInfo }}
        >
          {children}
        </userInfoContext.Provider>
      );

}

