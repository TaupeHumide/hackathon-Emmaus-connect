import { RefValM, RefValS, Categories } from "./RefTable";

const calculate = (item) => {
  const valM = RefValM[item.ram];
  const valS = RefValS[item.stockage];
  const total = item.indiceAntutu + valM + valS;

  const pondTotal = total + item.ponderation / 100;
  const cat = Categories.find(
    ({ min, max }) => pondTotal >= min && pondTotal < max
  )?.value;
  return [pondTotal, cat];
};
export default calculate;
