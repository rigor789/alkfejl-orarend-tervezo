import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {appRoutes} from './routes';
import {AppComponent} from './app.component';
import {MenuComponent} from './components/menu/menu.component';
import {MaterialDesignModule} from './material-design.module';
import {LoginComponent} from './page/login/login.component';
import {RegisterComponent} from './page/register/register.component';
import {TimetableComponent} from './page/timetable/timetable.component';
import {SearchComponent} from './page/search/search.component';
import {AuthService} from "./service/auth.service";
import {SearchService} from "./service/search.service";
import {HttpModule} from "@angular/http";
import {AuthGuard} from "./guard/auth.guard";
import { ErrorComponent } from './page/error/error.component';
import { UsersComponent } from './page/users/users.component';
import {UserService} from "./service/user.service";
import {TimetableService} from "./service/timetable.service";
import { UserDetailComponent } from './page/user-detail/user-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    LoginComponent,
    RegisterComponent,
    TimetableComponent,
    SearchComponent,
    ErrorComponent,
    UsersComponent,
    UserDetailComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialDesignModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [AuthService, SearchService, UserService, TimetableService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {
}
