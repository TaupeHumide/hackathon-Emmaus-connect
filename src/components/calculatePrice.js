import { RefValM, RefValS, Categories } from "./RefTable";

const calculate = (item) => {
  const valM = RefValM[item.ram];
  const valS = RefValS[item.stockage];
  const total = item.indiceAntutu + valM + valS;

  const pondTotal = total * (1 + item.ponderation);
  console.log(pondTotal);
  const cat = Categories.find(
    ({ min, max }) => pondTotal >= min && pondTotal < max
  )?.value;
  console.log(cat);
  return [pondTotal, cat];
};
export default calculate;
