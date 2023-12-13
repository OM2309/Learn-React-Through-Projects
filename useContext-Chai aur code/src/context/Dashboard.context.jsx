import { createContext, useState } from "react";

const DashboardContext = createContext();
const DashboardContextProvider = ({ children }) => {
  const [dashData, setDashData] = useState([]);
    

  return (
    <>
      <DashboardContext.Provider value={{  }}>
        {children}
      </DashboardContext.Provider>
    </>
  );
};


export { DashboardContext }
export default  DashboardContextProvider;