import React, { useEffect, useState } from "react";
import icons from "../utils/icons";
import { getNumbersArea, getNumbersPrice } from "../utils/Common/getNumbers";
import { getCodesArea, getCodesPrice } from "../utils/Common/getCodes";

const { GrLinkPrevious } = icons;

const Modal = ({
  setIsShowModal,
  content,
  name,
  header,
  handleSubmit,
  queries,
  arrMinMax,
  defaultText,
}) => {
  const [persent1, setPersent1] = useState(
    (name === "price"
      ? arrMinMax?.priceArr?.[0]
      : name === "area"
      ? arrMinMax?.areaArr?.[0]
      : 0) || 0
  );
  const [persent2, setPersent2] = useState(
    (name === "price"
      ? arrMinMax?.priceArr?.[1]
      : name === "area"
      ? arrMinMax?.areaArr?.[1]
      : 100) || 100
  );
  const [activedEl, setActivedEl] = useState("");

  useEffect(() => {
    const activedTrackEl = document.getElementById("track-active");
    if (activedTrackEl) {
      if (persent1 <= persent2) {
        activedTrackEl.style.left = `${persent1}%`;
        activedTrackEl.style.right = `${100 - persent2}%`;
      } else {
        activedTrackEl.style.left = `${persent2}%`;
        activedTrackEl.style.right = `${100 - persent1}%`;
      }
    }
  }, [persent1, persent2]);

  const handleClickTrack = (e, value) => {
    const stackEl = document.getElementById("track");
    const stackRect = stackEl.getBoundingClientRect();
    let percent = value
      ? +value
      : Math.round(((e.clientX - stackRect.left) * 100) / stackRect.width);

    if (Math.abs(percent - persent1) <= Math.abs(percent - persent2)) {
      setPersent1(percent);
    } else {
      setPersent2(percent);
    }
  };

  const convert100ToTarget = (percent) => {
    return name === "price"
      ? Math.ceil(Math.round((percent * 1.5) / 5) * 5) / 10
      : name === "area"
      ? Math.ceil(Math.round((percent * 0.9) / 5) * 5)
      : 0;
  };

  const convertTo100 = (number) => {
    let target = name === "price" ? 15 : name === "area" ? 90 : 0;
    return Math.floor((number / target) * 100);
  };

  const handlePrice = (code, value) => {
    setActivedEl(code);
    let arrMinMax =
      name === "price" ? getNumbersPrice(value) : getNumbersArea(value);

    if (arrMinMax.length === 1) {
      // gia duoi 1 trieu
      if (arrMinMax[0] === 1) {
        setPersent1(0);
        setPersent2(convertTo100(1));
      }
      // dien tich duoi 20m2
      if (arrMinMax[0] === 20) {
        setPersent1(0);
        setPersent2(convertTo100(20));
      }
      // gia tren 15 hoac dien tich trn 90
      if (arrMinMax[0] === 15 || arrMinMax[0] === 90) {
        setPersent1(100);
        setPersent2(100);
      }
    }
    if (arrMinMax.length === 2) {
      setPersent1(convertTo100(arrMinMax[0]));
      setPersent2(convertTo100(arrMinMax[1]));
    }
  };

  const handleBeforeSubmit = (e) => {
    const min = persent1 <= persent2 ? persent1 : persent2;
    const max = persent1 <= persent2 ? persent2 : persent1;
    let arrMinMax =[convert100ToTarget(min), convert100ToTarget(max)]
    // const gaps =
    //   name === "price"
    //     ? getCodesPrice(
    //         arrMinMax,
    //         content
    //       )
    //     : name === "area"
    //     ? getCodesArea(
    //        arrMinMax,
    //         content
    //       )
    //     : [];

    handleSubmit(
      e,
      {
        [`${name}Number`]: arrMinMax,
        [name]: `Từ ${convert100ToTarget(min)} - ${convert100ToTarget(max)} ${
          name === "price" ? "triệu" : "m2"
        } `,
      },
      { [`${name}Arr`]: [min, max] }
    );
  };

  return (
    <div
      onClick={() => {
        setIsShowModal(false);
      }}
      className="fixed top-0 left-0 bottom-0 right-0 bg-overlay-70 z-20 items-center justify-center flex"
    >
      <div
        onClick={(e) => {
          e.stopPropagation();
          setIsShowModal(true);
        }}
        className="w-2/5 h-[500px] relative bg-white rounded-md"
      >
        <div className="h-[45px] px-4 flex items-center border-b border-gray-100">
          <span
            onClick={(e) => {
              e.stopPropagation();
              setIsShowModal(false);
            }}
            className="cursor-pointer "
          >
            <GrLinkPrevious size={24} />
          </span>
          <h3 className="uppercase font-bold ml-[140px] text-[18px]">
            {header}
          </h3>
        </div>
        {(name === "category" || name === "province") && (
          <div className="flex flex-col p-4">
            <span className="py-2 flex items-center gap-1 border-b border-dotted pb-1 border-gray-300">
              <input
                type="radio"
                name={name}
                id="default"
                value={defaultText}
                checked={!queries[`${name}Code`] ? true : false}
                onChange={(e) =>
                  handleSubmit(e, {
                    [name]: defaultText,
                    [`${name}Code`]: null,
                  })
                }
              />
              <lable htmlFor="default">{defaultText}</lable>
            </span>

            {content?.map((item) => {
              return (
                <span
                  key={item.code}
                  className="py-2 flex items-center gap-1 border-b border-dotted pb-1 border-gray-300"
                >
                  <input
                    type="radio"
                    name={name}
                    id={item.code}
                    value={item.code}
                    checked={
                      item.code === queries[`${name}Code`] ? true : false
                    }
                    onChange={(e) =>
                      handleSubmit(e, {
                        [name]: item.value,
                        [`${name}Code`]: item.code,
                      })
                    }
                  />
                  <lable htmlFor={item.code}>{item.value}</lable>
                </span>
              );
            })}
          </div>
        )}
        {(name === "price" || name === "area") && (
          <div className="p-12 py-20">
            <div className="flex flex-col items-center justify-center relative">
              <div className="absolute z-30 top-[-48px] font-semibold text-xl text-orange-600 ">
                {persent1 === 100 && persent2 === 100
                  ? `Trên ${convert100ToTarget(persent1)} ${
                      name === "price" ? "triệu" : "m2"
                    }`
                  : `Từ ${
                      persent1 <= persent2
                        ? convert100ToTarget(persent1)
                        : convert100ToTarget(persent2)
                    } - ${
                      persent2 > persent1
                        ? convert100ToTarget(persent2)
                        : convert100ToTarget(persent1)
                    } ${name === "price" ? "triệu" : "m2"}`}
              </div>
              <div
                onClick={handleClickTrack}
                id="track"
                className=" cursor-pointer slider-track h-[5px] absolute top-0 bottom-0 w-full bg-gray-300 rounded-full"
              ></div>
              <div
                onClick={handleClickTrack}
                id="track-active"
                className="cursor-pointer slider-track-active h-[5px] absolute top-0 bottom-0 bg-orange-600 rounded-full"
              ></div>

              <input
                min={0}
                max={100}
                step={1}
                type="range"
                value={persent1}
                className="w-full appearance-none pointer-events-none absolute top-0 bottom-0"
                onChange={(e) => {
                  setPersent1(+e.target.value);
                  activedEl && setActivedEl("");
                }}
              />
              <input
                min={0}
                max={100}
                step={1}
                type="range"
                value={persent2}
                className="w-full appearance-none pointer-events-none absolute top-0 bottom-0"
                onChange={(e) => {
                  setPersent2(+e.target.value);
                  activedEl && setActivedEl("");
                }}
              />
              <div className="absolute z-30 top-6 left-0 right-0 justify-between items-center flex">
                <span
                  className="cursor-pointer"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleClickTrack(e, 0);
                  }}
                >
                  0
                </span>
                <span
                  className="cursor-pointer mr-[-12px]"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleClickTrack(e, 100);
                  }}
                >
                  {name === "price"
                    ? "15 triệu +"
                    : name === "area"
                    ? "Trên 90m2"
                    : ""}
                </span>
              </div>
            </div>

            <div className="mt-24">
              <h4 className="font-medium mb-4">Chọn nhanh:</h4>
              <div className="flex gap-2 items-center flex-wrap w-full">
                {content?.map((item) => {
                  return (
                    <button
                      key={item.code}
                      onClick={() => handlePrice(item.code, item.value)}
                      className={`${
                        item.code === activedEl
                          ? "bg-blue-500 text-white"
                          : "bg-gray-200"
                      } px-4 py-2 rounded-md cursor-pointer`}
                    >
                      {item.value}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        )}
        {(name === "price" || name === "area") && (
          <button
            className="w-full absolute bottom-0 bg-orange-400 py-2 font-medium rounded-bl-md rounded-br-md"
            type="button"
            onClick={handleBeforeSubmit}
          >
            Áp dụng
          </button>
        )}
      </div>
    </div>
  );
};

export default Modal;
