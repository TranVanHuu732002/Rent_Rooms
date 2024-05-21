import React, { useEffect } from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import { Navigation, Search } from "./index";
import { Contact, Intro } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../store/actions";


function Home() {
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector((state) => state.auth);

  useEffect(() => {
    setTimeout(() => {
      isLoggedIn && dispatch(actions.getCurrent());
    }, 1000);
  }, [isLoggedIn]);

  useEffect(() => {
    dispatch(actions.getPrices());
    dispatch(actions.getAreas());
    dispatch(actions.getProvinces());
  }, []);
  return (
    <div className="w-full flex flex-col items-center m-auto h-full border border-red-500">
      <Header />
      <Navigation />
      {isLoggedIn && <Search />}
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
