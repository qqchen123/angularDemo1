import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RequestService {
  constructor() {}
  //同步方法
  getData() {
    return 'test request data';
  }
  getRxjsData() {
    return new Observable((observer) => {
      setTimeout(() => {
        var username = 'zhangsan';
        observer.next(username);
      }, 2000);
    });
  }
}
