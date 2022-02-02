import { Injectable } from '@angular/core';
import axios from 'axios';
@Injectable({
  providedIn: 'root',
})
export class AxrequestService {
  constructor() {}
  axiosGet(api: any) {
    return new Promise((resolve, rejects) => {
      axios.get(api).then(function (res) {
        console.log(res);
        resolve(res);
      });
    });
  }
}
