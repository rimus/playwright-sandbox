import { log } from '../../utils/logger.js';

export class Coupon {
  constructor(code, description) {
    this.code = code;
    this.description = description;
    log.debug(`Coupon with code ${code} initialized`);
  }
}
