import { User } from './user.js';

export class UserFactory {
  static getDefaultUser() {
    return new User('alex@some.mail', '123456');
  }
}
