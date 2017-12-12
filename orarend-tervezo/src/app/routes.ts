import {Routes} from '@angular/router';
import {LoginComponent} from './page/login/login.component';
import {RegisterComponent} from './page/register/register.component';
import {TimetableComponent} from './page/timetable/timetable.component';
import {SearchComponent} from './page/search/search.component';


export const appRoutes: Routes = [

{
  path: '',
  canActivateChild: [],

  children: [
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'timetable', component: TimetableComponent },
    { path: 'search', component: SearchComponent },
  ]
}

];
