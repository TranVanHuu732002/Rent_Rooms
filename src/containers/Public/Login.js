import React from "react";
import { Button, InputForm } from "../../components";

function Login() {
  return (
    <div className="bg-white w-[600px] mt-[12px] pt-[30px] pb-[40px] rounded-md shadow-sm justify-center">
      <h3 className="font-semibold text-2xl justify-center flex">Đăng Nhập</h3>
      <div className="w-full flex flex-col gap-5 p-[20px]">
        <InputForm label={'SỐ ĐIỆN THOẠI' }/>
        <InputForm label={'MẬT KHẨU ' }/>
        <Button 
        text='Đăng Nhập'
        bgColor='bg-secondary1'
        textColor='text-white'
        fullWidth
        />

        <div className="flex justify-between px-[12px] items-center">
          <span className="text-[blue] hover:text-[red] cursor-pointer">Quên mật khẩu?</span>
          <span className="text-[blue] hover:text-[red] cursor-pointer">Tạo tài khoản</span>

        </div>
      </div>
    </div>
  );
}

export default Login;
