import React, { useEffect, useState } from "react";
import { Button, InputForm } from "../../components";
import { useLocation } from "react-router-dom";

function Login() {
  const location = useLocation()
  const [isRegister, setIsRegister] = useState(location.state?.flag);
  useEffect(() => {
    setIsRegister(location.state?.flag)
    console.log(location.state?.flag);
  },[location.state?.flag])

  return (
    <div className="bg-white w-[600px] mt-[12px] pt-[30px] pb-[40px] rounded-md shadow-sm justify-center">
      <h3 className="font-semibold text-2xl justify-center flex">
        {isRegister ? "Đăng Ký Tài Khoản" : "Đăng Nhập"}
      </h3>
      <div className="w-full flex flex-col gap-5 p-[20px]">
        {isRegister && <InputForm label={"HỌ TÊN"} />}
        <InputForm label={"SỐ ĐIỆN THOẠI"} />
        <InputForm label={"MẬT KHẨU "} />
        <Button
          text={isRegister ? "Đăng Ký" : "Đăng Nhập"}
          bgColor="bg-secondary1"
          textColor="text-white"
          fullWidth
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
