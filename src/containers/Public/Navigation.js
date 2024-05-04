import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { formatVietnameseToString } from "../../utils/Common/formatVietnameseToString";
import { useDispatch, useSelector } from "react-redux";
import * as actions from '../../store/actions'

const notActive =
  "hover:bg-secondary2 px-4 h-full flex items-center bg-secondary1";
const active =
  "hover:bg-secondary2 px-4 h-full flex items-center bg-secondary2";

export const Navigation = () => {
  // const [categories, setCategories] = useState([]);
  const dispatch = useDispatch()
  const {categories} = useSelector(state => state.app)

  useEffect(() => {
    dispatch(actions.getCategories())
  }, []);

  return (
    <div className="w-full flex justify-center items-center text-white bg-secondary1 h-[40px] ">
      <div className="w-3/4 flex items-center h-full text-sm font-medium">
        <NavLink
          to={"/"}
          className={({ isActive }) => (isActive ? active : notActive)}
        >
          Trang chủ
        </NavLink>
        {categories?.length > 0 &&
          categories.map((item) => {
            return (
              <div
                key={item.code}
                className="h-full flex justify-center items-center"
              >
                <NavLink
                  to={`${formatVietnameseToString(item.value)}`}
                  className={({ isActive }) => (isActive ? active : notActive)}
                >
                  {item.value}
                </NavLink>
              </div>
            );
          })}
      </div>
    </div>
  );
};
export default Navigation;
