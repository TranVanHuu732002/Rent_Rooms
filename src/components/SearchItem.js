import React, { memo } from "react";

const searchItem = ({ iconBefore, iconAfter, text, fontWeight }) => {
  return (
    <div className="bg-white py-2 px-4 w-full rounded-md text-gray-400 text-[13.3px] flex justify-between items-center">
      <div className="flex items-center gap-1">
        {iconBefore}
        <span
          className={`${
            fontWeight && "font-medium text-black"
          } overflow-hidden text-ellipsis whitespace-nowrap`}
        >
          {text}
        </span>
      </div>
      {iconAfter}
    </div>
  );
};

export default memo(searchItem);
