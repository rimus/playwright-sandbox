import { User } from './user.js';
import { log } from '../../utils/logger.js';

export class UserFactory {
  static getDefaultUser() {
    log.info('Creating default user for Awesome Shop App');
    return new User('alex@some.mail', '123456');
  }
}
