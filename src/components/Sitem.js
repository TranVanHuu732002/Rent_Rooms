import React from "react";
import moment from "moment";
import 'moment/locale/vi'
import { GrStar } from "react-icons/gr";

const Sitem = ({ title, image, price, createdAt,star }) => {
  const handleStar = (star) => {
    let starts = [];
    for (let i = 1; i < +star; i++)
      starts.push(<GrStar className="star-item" size={10} color="yellow" />);
    return starts;
  };

  return (
    <div className="w-full flex items-center gap-1 border-b py-2 border-gray-300">
      <img
        src={image[0]}
        alt={title}
        className="w-[65px] h-[65px] object-cover flex-none rounded-md"
      />
      <div className="w-full flex flex-auto flex-col gap-1">
        <h4 className="text-blue-600 text-[15px] line-clamp-2">
        {handleStar(+star).length > 0 &&
              handleStar(+star).map((star, number) => {
                return <span key={number}>{star}</span>;
              })}{`${title?.toLowerCase()}`}
        </h4>
        <div className="w-full flex flex-row items-center justify-between">
          <span className="font-xs text-sm text-green-500">{price}</span>
          <span className="text-gray-300 text-sm">{moment(createdAt).fromNow()}</span>
        </div>
      </div>
    </div>
  );
};

export default Sitem;
