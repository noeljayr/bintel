export const formatAmountWithCommas = (value: number) => {
  const stringValue = value.toString();
  const parts = stringValue.split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return parts.join(".");
};
