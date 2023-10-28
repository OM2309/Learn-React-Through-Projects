import React from "react";
import "./App.css";
import { Users } from "./Users";
import { useState } from "react";
// import Table from "./Table";

const App = () => {
  const [query, setQuery] = useState(" ");

  console.log(
    Users.filter((user) => {
      return user.name.toLowerCase().includes("well"); // Use === for strict equality
    })
  );

  // table operations function
  // const search = (data) => {
  //   return  data.filter((item)=>{
  //     return item.name.toLowerCase().includes(query.toLowerCase());
  //   });
  // };

  return (
    <>
      <div className="App">
        <input
          type="text"
          placeholder="Search..."
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>

      <ul className="list">
        {Users.filter((user) => {
          return user.name.toLowerCase().includes(query); // Use === for strict equality
        }).map((user) => (
          <li
            key={user.id}
            className="listItem"
            style={{ listStyleType: "none" }}
          >
            {user.name}
          </li>
        ))}
      </ul> 

      {/* <Table data={search(Users)} /> */}
    </>
  );
};

export default App;
