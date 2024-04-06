import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  list: number[] = [100];

  addnum(num: number) {
    this.list.push(num);
  }
  getnum() {
    return this.list;
  } 
}
