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
import {CourseDataSource, SearchComponent} from './page/search/search.component';
import {AuthService} from "./service/auth.service";
import {SearchService} from "./service/search.service";
import {HttpModule} from "@angular/http";

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    LoginComponent,
    RegisterComponent,
    TimetableComponent,
    SearchComponent,
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
  providers: [AuthService, SearchService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
