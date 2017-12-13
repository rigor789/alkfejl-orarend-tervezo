import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import { Server } from "../utils/Server";
import {Observable} from "rxjs/Observable";
import {Course} from "../model/Course";
import "rxjs/add/operator/map"

@Injectable()
export class SearchService {

  constructor(private http: Http) { }

  findByName(name: String): Observable<Course> {
    return this.http.get(Server.getURLFor(Server.routes.SEARCH))
      .map(res => res.json())
  }
}
