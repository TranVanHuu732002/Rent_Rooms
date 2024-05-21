import { getNumbersArea, getNumbersPrice } from "./getNumbers";

export const getCodePrice = (totals) => {
  let arr = [];
  return totals.map((item) => {
    let arrMinMax = getNumbersPrice(item.value);
    if (arrMinMax.length === 1) arr.push(arrMinMax[0]);
    let sortedArr = arr.sort();

    return {
      ...item,
      min: sortedArr.indexOf(arrMinMax[0]) === 0 ? 0 : arrMinMax[0],
      max:
        sortedArr.indexOf(arrMinMax[0]) === 0
          ? arrMinMax[0]
          : sortedArr.indexOf(arrMinMax[0]) === 1
          ? 99999
          : arrMinMax[1],
    };
  });
};

export const getCodeArea = (totals) => {
  let arr = [];
  return totals.map((item) => {
    let arrMinMax = getNumbersArea(item.value);
    if (arrMinMax.length === 1) arr.push(arrMinMax[0]);
    let sortedArr = arr.sort();

    return {
      ...item,
      min: sortedArr.indexOf(arrMinMax[0]) === 0 ? 0 : arrMinMax[0],
      max:
        sortedArr.indexOf(arrMinMax[0]) === 0
          ? arrMinMax[0]
          : sortedArr.indexOf(arrMinMax[0]) === 1
          ? 99999
          : arrMinMax[1],
    };
  });
};

export const getCodesPrice = (arrMinMax, prices) => {
  const pricesWithMinMax = getCodePrice(prices);
  return pricesWithMinMax.filter(
    (item) =>
      (item.min >= arrMinMax[0] && item.min <= arrMinMax[1]) ||
      (item.max >= arrMinMax[0] && item.max <= arrMinMax[1])
  );
};

export const getCodesArea = (arrMinMax, areas) => {
  const areasWithMinMax = getCodeArea(areas);
  return areasWithMinMax.filter(
    (item) =>
      (item.min >= arrMinMax[0] && item.min <= arrMinMax[1]) ||
      (item.max >= arrMinMax[0] && item.max <= arrMinMax[1])
  );
};