import {Injectable} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {Server} from "../utils/Server";
import {Http} from "@angular/http";
import {User} from "../model/User";

@Injectable()
export class UserService {
  constructor(private http: Http) {
  }

  all(): Observable<User[]> {
    return this.http.get(Server.getURLFor(Server.routes.USERS))
      .map(res => res.json())
  }
}
