import React from "react";
import Header from "../components/Header";
import { MyCard } from "../components/MyCard";
import MyTable from "../components/MyTable";
import MyCarousel from "../components/MyCarousel";

export const Home = () => {
  return (
    <>
      <Header />
      <MyCarousel/>
      <div style={{ gap: "1rem" }} className="d-flex ">
        <MyCard />
        <MyCard imgUrl="https://images.unsplash.com/photo-1682695799561-033f55f75b25?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8" />
      </div>
      <MyTable />
    </>
  );
};
