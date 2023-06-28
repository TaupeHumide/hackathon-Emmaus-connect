// TODO à completer

export const RefValA = {
  0: {
    range: "0 - 50000",
    value: 40,
  },
  1: {
    range: "50000 - 100000",
    value: 44,
  },
  2: {
    range: "100000 - 150000",
    value: 49,
  },
};

export const RefValM = {
  1: 30,
  2: 40,
  3: 54,
  4: 0,
  6: 0,
  8: 0,
  12: 0,
  16: 0,
};

export const RefValS = {
  16: 31,
  32: 45,
  64: 66,
  128: 0,
  256: 0,
  512: 0,
  1000: 0,
};

export const States = [
  "DEEE",
  "REPARABLE",
  "BLOQUE",
  "RECONDITIONABLE",
  "RECONDITIONNE",
];

export const Categories = [
  {
    min: 0,
    max: 90,
    value: "1 - HC",
  },
  {
    min: 90,
    max: 165,
    value: "2 - C",
  },
  {
    min: 165,
    max: 255,
    value: "3 - B",
  },
  {
    min: 165,
    max: 255,
    value: "3 - B",
  },
  {
    min: 255,
    max: 375,
    value: "4 - A",
  },
  {
    min: 375,
    max: 100000000000000000000000000000000000000000000000000000000000000000000000000000000000,
    value: "5- Premium",
  },
];

// TODO : config minimal ???
