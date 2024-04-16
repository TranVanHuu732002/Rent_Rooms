import React, { useEffect, useState } from "react";
import { Button, InputForm } from "../../components";
import { useLocation } from "react-router-dom";
import * as actions from "../../store/actions";
import { useDispatch } from "react-redux";

function Login() {
  const location = useLocation();
  const dispatch = useDispatch();

  const [isRegister, setIsRegister] = useState(location.state?.flag);
  const [invalid,setInvalid] = useState([])
  const [payload, setPayload] = useState({
    name: "",
    phone: "",
    password: "",
  });

  useEffect(() => {
    setIsRegister(location.state?.flag);
  }, [location.state?.flag]);

  const handleSubmit = async () => {
    console.log(payload);
    isRegister ? dispatch(actions.register(payload)) : dispatch(actions.login(payload));
    // validate(payload)
  };

  // Check validate
  const validate = (payload) => {

  }

  return (
    <div className="bg-white w-[600px] mt-[12px] pt-[30px] pb-[40px] rounded-md shadow-sm justify-center">
      <h3 className="font-semibold text-2xl justify-center flex">
        {isRegister ? "Đăng Ký Tài Khoản" : "Đăng Nhập"}
      </h3>
      <div className="w-full flex flex-col gap-5 p-[20px]">
        {isRegister && (
          <InputForm
            label={"HỌ TÊN"}
            value={payload.name}
            type={"name"}
            setValue={setPayload}
          />
        )}
        <InputForm
          label={"SỐ ĐIỆN THOẠI"}
          value={payload.phone}
          type="phone"
          setValue={setPayload}
        />
        <InputForm
          label={"MẬT KHẨU "}
          value={payload.password}
          type="password"
          setValue={setPayload}
        />
        <Button
          text={isRegister ? "Đăng Ký" : "Đăng Nhập"}
          bgColor="bg-secondary1"
          textColor="text-white"
          fullWidth
          onClick={handleSubmit}
        />

        <div className="flex justify-between px-[12px] items-center">
          {isRegister ? (
            <span>
              Bạn đã có tài khoản?
              <span
                className="ml-[4px] text-[blue] hover:text-[red] cursor-pointer"
                onClick={() => setIsRegister(false)}
              >
                Đăng nhập ngay
              </span>
            </span>
          ) : (
            <>
              <span className="text-[blue] hover:text-[red] cursor-pointer">
                Quên mật khẩu?
              </span>
              <span
                className="text-[blue] hover:text-[red] cursor-pointer"
                onClick={() => setIsRegister(true)}
              >
                Tạo tài khoản
              </span>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Login;
