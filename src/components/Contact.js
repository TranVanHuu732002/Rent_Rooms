import React from "react";
import { text } from "../utils/dataContact";
import { Button } from "../components";

const Contact = () => {
  return (
    <div className="w-3/4 bg-white rounded-md shadow-md flex flex-col items-center justify-center gap-6 p-4">
      <div
        className="w-3/5 h-48 bg-cover bg-center"
        style={{ backgroundImage: `url(${text.image})` }}
      />
      <p>{text.content}</p>
      <div className="flex items-center justify-around w-full">
        {text.contacts.map((item, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center justify-center"
            >
              <span className="text-orange-500 font-semibold">{item.text}</span>
              <span className="text-blue-900 text-[24px] font-semibold">
                {item.phone}
              </span>
              <span className="text-blue-900 text-[24px] font-semibold">
                {item.zalo}
              </span>
            </div>
          );
        })}
      </div>
      <Button
        text="Gửi liên hệ"
        bgColor="bg-blue-600"
        textColor="text-white"
        px="px-6"
      />
    </div>
  );
};

export default Contact;
