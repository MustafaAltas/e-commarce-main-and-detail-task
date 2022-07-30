export const formatPrice = (number) => {
  const newNumber = Intl.NumberFormat("tr-TR", {
    style: "currency",
    currency: "TRY",
  }).format(number);
  return newNumber;
};
