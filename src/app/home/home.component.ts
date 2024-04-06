import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  constructor(private _cookie: CookieService,private http:HttpClient) {
    _cookie.set('userid', 'admin01');
  }
  setcookie() {
    this._cookie.set('empcode', '0123');
  }
  
}
