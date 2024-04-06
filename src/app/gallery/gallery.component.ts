import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css',
})
export class GalleryComponent {
  register: FormGroup;

  constructor(private _fb: FormBuilder) {
    this.register = this._fb.group({
      department: '',
      name: '',
      email: '',
      phone: '',
      usercode: '',
      status: '',
    });
  }

  onSubmit() {
    if (this.register.valid) {
      // console.log(this.register.value);
    }
  }
}
