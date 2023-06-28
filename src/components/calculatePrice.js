import { RefValA, RefValM, RefValS, Categories } from "./RefTable";

const calculate = () => {
  // from formulaire
  const modele = "iphone6";
  const ram = 1;
  const stockage = 32;
  const antutu = 0;
  const pond = -10;

  const valA = RefValA[antutu]?.value;
  const valM = RefValM[ram];
  const valS = RefValS[stockage];
  const total = valA + valM + valS;

  const pondTotal = total * (1 + pond);

  const cat = Categories.find(
    ({ min, max }) => pondTotal >= min && pond < max
  )?.value;

  console.log(cat);
};
