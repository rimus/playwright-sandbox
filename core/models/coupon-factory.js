import { Coupon } from './coupon.js';
import { log } from '../../utils/logger.js';

export class CouponFactory {
  static getPercentDiscountUnlimitedCouponForRegisteredUsers() {
    log.info('Creating coupon VIP for Awesome Shop App');
    return new Coupon('VIP', '15% for amount from 300 USD for registered users only, unlimited usage');
  }

  static getPercentDiscountUnlimitedCouponForAllUsers() {
    log.info('Creating coupon TenPercent for Awesome Shop App');
    return new Coupon(
      'TenPercent',
      '10% for amount from 1000 USD for all users (registered and non-registered), unlimited usage'
    );
  }

  static getFreeShippingOneTimeCouponForRegisteredUsers() {
    log.info('Creating coupon IDDQD for Awesome Shop App');
    return new Coupon('IDDQD', 'free shipping from 400 USD for registered users only, 1 usage for 1 user');
  }
}
