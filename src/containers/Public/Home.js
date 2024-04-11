import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";

function Home() {
  return (
    <div className="w-full flex flex-col items-center m-auto h-full border border-red-500">
      <Header />
      <Navigation/>
      <div className="w-1100 flex flex-col items-center justify-center">
        <Outlet/>
      </div>
    </div>
  );
}

export default Home;
