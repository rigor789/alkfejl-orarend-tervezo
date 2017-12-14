import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from "@angular/router";
import {AuthService} from "../../service/auth.service";
import {User} from "../../model/User";

@Component(
{
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup = new FormGroup({
    firstname: new FormControl('', [Validators.required]),
    lastname: new FormControl('', [Validators.required]),
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  });


  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  submit() {
      this.authService.register(new User(this.username.value, this.password.value))
        .subscribe(
          res => this.router.navigate(['/search']),
          err => console.log(err))
    }

  get firstname(): AbstractControl {
      return this.registerForm.get('firstname');
    }

  get lastname(): AbstractControl {
    return this.registerForm.get('lastname');
  }

  get username(): AbstractControl {
    return this.registerForm.get('username');
  }

  get password(): AbstractControl {
    return this.registerForm.get('password');
  }
}
