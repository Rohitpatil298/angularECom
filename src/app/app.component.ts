import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

import { RouterLink, RouterOutlet, RouterLinkActive } from '@angular/router';
import { GalleryComponent } from './gallery/gallery.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { ApiService } from './shared/api.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    FormsModule,
    CommonModule,
    RouterLink,
    RouterLinkActive,
    MatDialogModule,
    HttpClientModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [HttpClientModule],
})
export class AppComponent implements OnInit {
  title = 'my-angular-project';
  serchtext: any;
  searchProduct: any;
  public num: number = 0;
  constructor(private _dialog: MatDialog, private api: ApiService) {}
  adduser() {
    this._dialog.open(GalleryComponent);
  }
  ngOnInit(): void {
    this.api.getproduct().subscribe((res) => {
      this.num = res.length;
    });
  }
}
