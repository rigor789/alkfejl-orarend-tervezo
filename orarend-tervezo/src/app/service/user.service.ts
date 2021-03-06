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

  findOne(id: Number) {
    return this.http.get(Server.getURLFor(Server.routes.USERS) + '/' + id)
      .map(res => res.json())
  }

  save(user: User, data) {
    return this.http.post(Server.getURLFor(Server.routes.USERS) + '/' + user.id, data)
      .map(res => res.json())
  }

  addComment(user: User, comment: String) {
    return this.http.post(Server.getURLFor(Server.routes.USERS) + '/' + user.id + '/comment', {
      content: comment
    })
      .map(res => res.json())
  }

  deleteComment(user: User, comment) {
    return this.http.post(Server.getURLFor(Server.routes.USERS) + '/' + user.id + '/comment/' + comment.id + '/delete', {})
      .map(res => res.json())
  }

  delete(user: User) {
    return this.http.post(Server.getURLFor(Server.routes.USERS) + '/' + user.id + '/delete', {})
      .map(res => res.json())
  }
}
