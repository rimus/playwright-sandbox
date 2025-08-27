import { log } from '../../utils/logger.js';

export class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
    log.debug(`User with email ${email} initialized`);
  }
}
