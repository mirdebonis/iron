import { Injectable } from '@angular/core';
import toast from 'toast-me';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  constructor() { }

  error(message: string, title: string = null) {
    if (!title) {
      this.pop('error', title, message);
    } else {
      this.pop('error', title, message);
    }
  }

  success(message: string, title: string = null) {
    if (!title) {
      this.pop('success', title, message);
    } else {
      this.pop('success', title, message);
    }
  }

  warning(message: string, title: string = null) {
    if (!title) {
      this.pop('warning', title, message);
    } else {
      this.pop('warning', title, message);
    }
  }

  private pop(type: string, message: string, title: string) {
    // console.info(title + ':' + message);
    if (!title) {
      toast(type, message);
    } else {
      toast(type, message, title);
    }
  }
}
