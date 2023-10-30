import axios from "axios";
import React, { useEffect, useState } from "react";

const App = () => {
  const [userAllData, setUserAllData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("https://reqres.in/api/users");
      setUserAllData(response.data.data);
    };

    fetchData();
  }, []);

  return (
    <div>
      {
        <div>
          {userAllData.map((data, index) => (
            <div key={index}>{data.first_name}</div>
          ))}
        </div>
      }
    </div>
  );
};

export default App;
