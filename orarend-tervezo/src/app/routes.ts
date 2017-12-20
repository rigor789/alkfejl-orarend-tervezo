import {Routes} from '@angular/router';
import {LoginComponent} from './page/login/login.component';
import {RegisterComponent} from './page/register/register.component';
import {TimetableComponent} from './page/timetable/timetable.component';
import {SearchComponent} from './page/search/search.component';
import {ErrorComponent} from "./page/error/error.component";
import {AuthGuard} from "./guard/auth.guard";
import {Role} from "./model/User";
import {UsersComponent} from "./page/users/users.component";


export const appRoutes: Routes = [

  {
    path: '',
    canActivateChild: [AuthGuard],

    children: [
      {path: '', redirectTo: 'login', pathMatch: 'full'},
      {path: 'login', component: LoginComponent, data: {roles: [Role.GUEST]}},
      {path: 'register', component: RegisterComponent, data: {roles: [Role.GUEST]}},
      {path: 'timetable', component: TimetableComponent, data: {roles: [Role.USER, Role.ADMIN, Role.DEVELOPER]}},
      {path: 'search', component: SearchComponent, data: {roles: [Role.USER, Role.ADMIN, Role.DEVELOPER]}},

      // Admin
      {path: 'users', component: UsersComponent, data: {roles: [Role.ADMIN, Role.DEVELOPER]}},
      {path: 'users/:id', component: UsersComponent, data: {roles: [Role.ADMIN, Role.DEVELOPER]}},

      // catch all
      {path: '**', component: ErrorComponent}
    ]
  }

];
