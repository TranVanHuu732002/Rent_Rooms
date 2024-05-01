import React, { useCallback, useEffect, useRef } from "react";
import logo from "../../assets/logowithoutbg.png";
import { Button } from "../../components";
import icons from "../../utils/icons";
import { useNavigate, useSearchParams } from "react-router-dom";
import { path } from "../../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../store/actions";

const { AiOutlinePlusCircle } = icons;

function Header() {
  const navigate = useNavigate();
  const headeRef = useRef();
  const { isLoggedIn } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const goLogin = useCallback((flag) => {
    navigate(path.LOGIN, { state: { flag } });
  }, []);

  useEffect(() => {
    headeRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [searchParams.get("page")]);

  return (
    <div ref={headeRef} className="w-3/4">
      <div className="w-full flex items-center justify-between ">
        <img
          src={logo}
          alt="logo"
          className="w-[240px] h-[70px] object-contain"
        />
        <div className="flex items-center gap-2">
          {!isLoggedIn && (
            <div className="flex items-center gap-2">
              <span className="font-normal">Xin chào ai đó!!!</span>
              <Button
                text={"Đăng nhập"}
                textColor="text-white"
                bgColor="bg-[#3961fb]"
                onClick={() => {
                  goLogin(false);
                }}
              />
              <Button
                text={"Đăng ký"}
                textColor="text-white"
                bgColor="bg-[#3961fb]"
                onClick={() => {
                  goLogin(true);
                }}
              />
            </div>
          )}
          {isLoggedIn && (
            <div className="flex items-center gap-2">
              <span className="font-normal">Tên người dùng!!!</span>
              <Button
                text={"Đăng xuất"}
                textColor="text-white"
                bgColor="bg-red-700"
                onClick={() => dispatch(actions.logout())}
              />
            </div>
          )}

          <Button
            text={"Đăng tin mới"}
            textColor="text-white"
            bgColor="bg-red-500"
            IcAfter={AiOutlinePlusCircle}
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
