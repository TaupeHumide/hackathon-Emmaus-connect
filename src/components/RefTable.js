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
  3: {
    range: "150000 - 200000",
    value: 55,
  },
  4: {
    range: "200000 - 250000",
    value: 62,
  },
  5: {
    range: "250000 - 300000",
    value: 70,
  },
  6: {
    range: "300000 - 350000",
    value: 79,
  },
  7: {
    range: "350000 - 400000",
    value: 89,
  },
  8: {
    range: "400000 - 450000",
    value: 100,
  },
  9: {
    range: "450000 - 500000",
    value: 112,
  },
  10: {
    range: "500000 - 550000",
    value: 125,
  },
  11: {
    range: "550000 - 600000",
    value: 139,
  },
  12: {
    range: "600000 - 650000",
    value: 154,
  },
  13: {
    range: "650000 - 700000",
    value: 170,
  },
  14: {
    range: "700000 - 750000",
    value: 187,
  },
  15: {
    range: "750000 - 800000",
    value: 205,
  },
  16: {
    range: "800000 - 850000",
    value: 224,
  },
  17: {
    range: "850000 - 900000",
    value: 244,
  },
  18: {
    range: "900000 - 950000",
    value: 265,
  },
  19: {
    range: "950000",
    value: 287,
  },
};

export const RefValM = {
  1: 30,
  2: 40,
  3: 54,
  4: 72,
  6: 94,
  8: 120,
  12: 150,
  16: 184,
  32: 222,
  64: 264,
  96: 310,
};

export const RefValS = {
  16: 31,
  32: 45,
  64: 66,
  128: 94,
  256: 129,
  512: 171,
  1000: 220,
  2000: 276,
  4000: 339,
  8000: 409,
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
