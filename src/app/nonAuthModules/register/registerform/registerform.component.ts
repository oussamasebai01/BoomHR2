import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../../service/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Request } from '../../../interface/request';

@Component({
  selector: 'app-registerform',
  templateUrl: './registerform.component.html',
  styles: [``],
})
export class RegisterformComponent implements OnInit {
  constructor(
    private Fb: FormBuilder,
    private authService: AuthService,
    private toastr: ToastrService
  ) {}

  registerFormModal = this.Fb.group({
    username: ['', [Validators.required, Validators.minLength(4)]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(4)]],
  });

  ngOnInit(): void {}
  handleSubmit() {
    this.authService
      .registerUser(this.registerFormModal.value)
      .subscribe((res: Request) => this.toastr.success(res.message));
  }
}
