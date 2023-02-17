import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationRoutingModule } from './authentication-routing.module';
import { SharedModule } from '../shared/shared.module';
import { LoginformComponent } from './login/loginform/loginform.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterformComponent } from './register/registerform/registerform.component';
import { AuthLayoutComponent } from './non-auth-layout/auth-layout.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    LoginformComponent,
    RegisterformComponent,
    AuthLayoutComponent,
  ],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    NgbModule,
  ],
})
export class AuthenticationModule {}
