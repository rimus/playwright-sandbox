import { log } from './logger.js';

export function parseCurrency(currencyString) {
  const parsed = Number(currencyString.replace(/[^0-9.,-]/g, '').replace(/,/g, ''));
  log.debug(`Parsing currency from ${currencyString} to ${parsed}`);
  return parsed;
}
