import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../service/auth.service";
import {NavigationEnd, Router} from "@angular/router";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  isLoggedIn: Boolean = false;

  constructor(public authService: AuthService, private router: Router) {
  }

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.isLoggedIn = this.authService.isLoggedIn;
      }
    })
  }

  logout() {
    this.authService.logout()
      .subscribe(
        res => this.router.navigate(['/']),
        err => console.log(err))
  }

}
