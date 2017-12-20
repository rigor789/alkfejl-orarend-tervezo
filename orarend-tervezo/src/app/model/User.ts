import {Course} from "./Course";

export class Role {
  static GUEST: String = 'GUEST';
  static USER: String = 'USER';
  static ADMIN: String = 'ADMIN';
  static DEVELOPER: String = 'DEVELOPER';
}

export class User {
  id: Number;
  username: String;
  password: String;
  email: String;
  role: String;
  courses: Array<Course> = [];

  constructor(username?: String, password?: String, email?: String, role?: String) {
    this.username = username || '';
    this.password = password || '';
    this.email = email || '';
    this.role = role || Role.GUEST;
  }

  isAdmin(): Boolean {
    return [Role.ADMIN, Role.DEVELOPER].includes(this.role);
  }
}
