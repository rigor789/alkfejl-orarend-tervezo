import {Component, OnInit} from '@angular/core';
import {UserService} from "../../service/user.service";
import {ActivatedRoute, Router} from "@angular/router";
import {User} from "../../model/User";
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../service/auth.service";

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  user: User = new User();
  id: Number;
  editForm: FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  });
  error: String = '';

  constructor(private userService: UserService, private router: Router, private route: ActivatedRoute) {
    this.route.params.subscribe(
      params => this.id = params.id,
      err => console.log(err)
    )
  }

  ngOnInit() {
    this.reload();
  }

  reload() {
    this.userService.findOne(this.id)
      .subscribe(
        res => {
          this.user = res
          this.editForm.patchValue(res)
        },
        err => console.log(err)
      )
  }

  save() {
    this.userService.save(this.user, this.editForm.getRawValue())
      .subscribe(
        res => this.router.navigate(['/users']),
        err => console.log(err)
      )
  }


  get username(): AbstractControl {
    return this.editForm.get('username');
  }

  get password(): AbstractControl {
    return this.editForm.get('password');
  }

  get email(): AbstractControl {
    return this.editForm.get('email');
  }

}
