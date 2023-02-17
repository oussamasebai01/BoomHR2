import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../service/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { Request } from '../../../interface/request';
@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styles: [
    `
      .wrapper {
        height: 90vh;
      }
      .login-form {
        width: 350px;
        box-shadow: 7px 5px 20px #968b8b3d;
      }
      .sign-in {
        font-size: 12px;
      }
    `,
  ],
})
export class LoginformComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private toastr: ToastrService,
    private routerS: Router
  ) {}

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
  });

  ngOnInit(): void {}
  showValue() {
    console.log(this.loginForm);
  }

  handleSubmit() {
    this.authService.logIn(this.loginForm.value).subscribe((res: Request) => {
      this.toastr.success(res.message);
    });
  }
}
