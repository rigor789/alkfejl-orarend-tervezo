import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  loginForm: FormGroup = new FormGroup({
    firstname: new FormControl('', [Validators.required]),
    lastname: new FormControl('', [Validators.required]),
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  });


  constructor() { }

  ngOnInit() {
  }

  submit() {
      /*this.authService.login(new User(this.username.value, this.password.value))
        .subscribe(
          res => this.router.navigate(['/issues']),
          err => console.log(err))*/
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
