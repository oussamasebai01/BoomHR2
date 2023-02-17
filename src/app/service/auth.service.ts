import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { apiUrl } from '../../environments/environment';
import { Request } from '../interface/request';
import { map, catchError, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private Http: HttpClient, private RouterS: Router) {}

  setLocalStorage(request) {
    return (
      request.hasOwnProperty('token') &&
      localStorage.setItem('Token', request.token)
    );
  }

  logIn(data) {
    return this.Http.post<Request>(apiUrl + 'login', data).pipe(
      tap((res) => {
        this.setLocalStorage(res);
        this.RouterS.navigate(['/dashboard']);
      }),
      catchError((err) => {
        const { error } = err;

        return new Observable((res) => {
          let reqData = {};

          if (err.status === 401) {
            reqData = {
              message: error.message,
              status: error.status,
              token: error.token,
            };
          } else {
            reqData = {
              message: err.statusText,
              status: err.status,
              token: '',
            };
          }
          res.next(reqData);
        });
      })
    );
  }

  registerUser(data) {
    return this.Http.post(apiUrl + 'register', data).pipe(
      catchError((err) => {
        const { error } = err;

        return new Observable((res) => {
          let reqData = {};

          if (err.status === 401) {
            reqData = {
              message: error.message,
              status: error.status,
            };
          } else {
            reqData = {
              message: err.statusText,
              status: err.status,
            };
          }
          res.next(reqData);
        });
      })
    );
  }

  getProfile() {
    const token = localStorage.getItem('Token');
    return this.Http.get(apiUrl + 'profile', {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      }),
    }).pipe(
      catchError((err) => {
        return new Observable((res) => {
          const reqData = {
            message: err.statusText,
            status: err.status,
          };
          res.next(reqData);
        });
      })
    );
  }
}
