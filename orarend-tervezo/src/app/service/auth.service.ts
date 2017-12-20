import {Injectable} from '@angular/core';
import {Http} from "@angular/http";
import {Role, User} from "../model/User";
import {Server} from "../utils/Server";

@Injectable()
export class AuthService {
  user: User;
  isLoggedIn: boolean = false;

  constructor(private http: Http) {
    this.user = new User();
  }

  login(user: User) {
    return this.http.post(Server.getURLFor(Server.routes.LOGIN), user)
      .map(res => {
        this.isLoggedIn = true;
        res = res.json()
        this.user = new User();
        Object.keys(res).forEach((k) => {
          this.user[k] = res[k];
        })

        ;(<any>global).user = this.user;

        return this.user;
      })
  }

  register(user: User) {
    return this.http.post(Server.getURLFor(Server.routes.REGISTER), user)
      .map(res => {
        this.isLoggedIn = true;
        res = res.json()
        this.user = new User();
        Object.keys(res).forEach((k) => {
          this.user[k] = res[k];
        })

        return this.user;
      })
  }

  logout() {
    return this.http.post(Server.getURLFor(Server.routes.LOGOUT), this.user)
      .map(res => {
        this.user = new User();
        this.isLoggedIn = false;
      })
  }
}
