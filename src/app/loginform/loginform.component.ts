import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UsersService } from '../service/users.service';
import { HttpClientModule } from '@angular/common/http';
import { login, singUp } from '../data-type';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginform',
  standalone: true,
  imports: [FormsModule, CommonModule, HttpClientModule],
  templateUrl: './loginform.component.html',
  styleUrl: './loginform.component.css',
})
export class LoginformComponent {
  showLogin = false;

  constructor(private seller: UsersService, private router: Router) {}
  sign(data: singUp): void {
    console.log(data);
    this.seller.onsignup(data);
    alert('registerd Sucessfull!!!');
    this.router.navigate(['login']);
  }
  gotologin() {
    this.showLogin = true;
  }
  login(data: login): void {
    console.log(data);
    localStorage.setItem('Login', data.email);
    if (data) {
      this.seller.onLogin(data);
       this.router.navigate(['home']);
    } else {
      alert('invalid credential');
    }
  }
  gotoregister() {
    this.showLogin = false;
  }
}
