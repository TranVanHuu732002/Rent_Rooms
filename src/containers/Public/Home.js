import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import { Navigation, Search } from "./index";

function Home() {
  return (
    <div className="w-full flex flex-col items-center m-auto h-full border border-red-500">
      <Header />
      <Navigation />
      <Search />
      <div className="w-3/4 flex flex-col items-center justify-center">
        <Outlet />
      </div>
    </div>
  );
}

export default Home;
