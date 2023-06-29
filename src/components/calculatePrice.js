import { RefValA, RefValM, RefValS, Categories } from "./RefTable";

const calculate = (item) => {
  const valA = RefValA[item.antutu]?.value;
  const valM = RefValM[item.ram];
  const valS = RefValS[item.stockage];
  const total = valA + valM + valS;

  const pondTotal = total * (1 + item.pond);

  const cat = Categories.find(
    ({ min, max }) => pondTotal >= min && item.pond < max
  )?.value;
  console.log(cat);
  return cat;
};
export default calculate;
