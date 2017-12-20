import {Component, OnInit} from '@angular/core';
import {UserService} from "../../service/user.service";
import {User} from "../../model/User";
import {DataSource} from "@angular/cdk/collections";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  displayedColumns: String[] = [
    'username',
    'email',
    'actions'
  ];
  dataSource: DataSource<User>;


  constructor(private userService: UserService) {
    this.dataSource = new UserDataSource(userService);
  }

  ngOnInit() {
  }

  edit(user: User) {
    console.log(user)
  }
}

export class UserDataSource extends DataSource<User> {
  constructor(private userService: UserService) {
    super();
  }

  connect(): Observable<User[]> {
    return this.userService.all();
  }

  disconnect() {
  }
}
