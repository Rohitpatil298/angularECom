import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { singUp, login } from '../data-type';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import EventEmitter from 'events';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  issSellerLogedIn = new BehaviorSubject<boolean>(false);
 // isLoginError = new EventEmitter<boolean>(false);
  constructor(private http: HttpClient, private router: Router) {}

  onsignup(data: singUp) {
    console.warn('service called');
    return this.http
      .post('http://localhost:3000/users', data, { observe: 'response' })
      .subscribe((res) => {
        if (res) {
          this.issSellerLogedIn.next(true); 
        }
      });
  }

  onLogin(data: login) {
    this.http
      .get(
        `http://localhost:3000/users?email=${data.email}&password=${data.password}`,
        { observe: 'response' }
      )
      .subscribe((res: any) => {
        if (res && res.body && res.body.length === 1) {
          //localStorage.setItem('logindata', res);
          this.router.navigate(['home']);
        } else {
        
        }
      });
  }
}
