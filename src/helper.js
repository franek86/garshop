export const formatPrice = (price) => {
  let formatter = new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "HRK",
  });

  return formatter.format(price);
};

export const approxEur = (price) => {
  let eurRate = 7.53; // 1 EUR = 7.53 HRK
  let converToEur = Number(price / eurRate).toFixed(2);

  return converToEur;
};
