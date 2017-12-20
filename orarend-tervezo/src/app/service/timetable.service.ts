import {Injectable} from '@angular/core';
import {Server} from "../utils/Server";
import {Http} from "@angular/http";
import {Course} from "../model/Course";
import {UserService} from "./user.service";
import {AuthService} from "./auth.service";

@Injectable()
export class TimetableService {
  constructor(private http: Http, private authService: AuthService) {
  }

  select(course) {
    const SelectBody = {
      userId: this.authService.user.id,
      courseCode: course.courseCode,
      subCode: course.subCode,
    }
    return this.http.post(Server.getURLFor(Server.routes.SELECT_COURSE), SelectBody)
      .map(res => res.json())
  }

}
