import React from "react";
import { SearchItem } from "../../components";
import icons from "../../utils/icons";

const {
  MdOutlineHouseSiding,
  BsChevronRight,
  HiOutlineLocationMarker,
  TbReportMoney,
  RiCrop2Line,
  FiSearch,
} = icons;

const Search = () => {
  return (
    <div className="p-[10px] my-3 w-3/4 bg-[#febb02] rounded-lg flex-col lg:flex-row flex items-center justify-around gap-3">
      <SearchItem
        iconBefore={<MdOutlineHouseSiding />}
        iconAfter={<BsChevronRight color="rgb(156,163,175)" />}
        text={"Phòng trọ,nhà trọ"}
      />
      <SearchItem
        iconBefore={<TbReportMoney />}
        iconAfter={<BsChevronRight color="rgb(156,163,175)" />}
        text={"Chọn giá"}
      />
      <SearchItem
        iconBefore={<HiOutlineLocationMarker />}
        iconAfter={<BsChevronRight color="rgb(156,163,175)" />}
        text={"Toàn quốc"}
      />
      <SearchItem
        iconBefore={<RiCrop2Line />}
        iconAfter={<BsChevronRight color="rgb(156,163,175)" />}
        text={"Chọn diện tích"}
      />
      <button
        className="bg-secondary1 flex items-center justify-center text-[13.3px] gap-3 rounded-md w-3/4 text-white outline-none py-2 px-4"
        type="button"
      >
        <FiSearch />
        Tìm kiếm
      </button>
    </div>
  );
};

export default Search;
