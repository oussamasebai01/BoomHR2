import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Request } from '../interface/request';

import { AuthService } from '../service/auth.service';
@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private AuthServiceS: AuthService, private RouterS: Router) {}
  canActivate(): boolean {
    this.AuthServiceS.getProfile().subscribe((response: Request) => {
      if (response.status === 200) {
        return true;
      } else {
        this.RouterS.navigate(['/auth/login']);
        return false;
      }
    });

    return true;
  }
}
