import {Routes} from '@angular/router';
import {LoginComponent} from './page/login/login.component';
import {RegisterComponent} from './page/register/register.component';

export const appRoutes: Routes = [

{
  path: '',
  canActivateChild: [],

  children: [
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent }
  ]
}

];
