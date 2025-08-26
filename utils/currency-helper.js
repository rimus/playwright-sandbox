export function parseCurrency(currencyString) {
  return Number(currencyString.replace(/[^0-9.,-]/g, '').replace(/,/g, ''));
}
