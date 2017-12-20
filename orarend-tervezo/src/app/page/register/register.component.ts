import {Component, OnInit} from '@angular/core';
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
    username: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  });
  error: String = '';


  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit() {
  }

  submit() {
    this.authService.register(new User(
      this.username.value,
      this.password.value,
      this.email.value
    ))
      .subscribe(
        res => this.router.navigate(['/search']),
        err => this.error = 'Something went wrong. Try again.')
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

  get email(): AbstractControl {
    return this.registerForm.get('email');
  }
}
