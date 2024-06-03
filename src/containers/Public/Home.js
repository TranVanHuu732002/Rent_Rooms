import React from "react";
import Header from "./Header";
import { Outlet, useLocation } from "react-router-dom";
import { Navigation, Search } from "./index";
import { Contact, Intro } from "../../components";
import { useSelector } from "react-redux";
import { path } from "../../utils/constant";

function Home() {
  const { isLoggedIn } = useSelector((state) => state.auth);

  const location = useLocation();
  console.log(location.pathname)
  return (
    <div className="w-full flex flex-col items-center m-auto h-full">
      <Header />
      <Navigation />
      {isLoggedIn && location.pathname !== `/${path.CONTACT}` && <Search />}
      <div className="w-3/4 flex flex-col items-center justify-center">
        <Outlet />
      </div>
      <Intro />
      <Contact />
      <div className="h-48"></div>
    </div>
  );
}

export default Home;
