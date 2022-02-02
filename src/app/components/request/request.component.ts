import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/services/request.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.less'],
})
export class RequestComponent implements OnInit {
  public list: any = [];
  constructor(public request: RequestService, public http: HttpClient) {}

  ngOnInit(): void {
    let data = this.request.getData();
    console.log(data);
    var rexjsData = this.request.getRxjsData();
    rexjsData.subscribe((data) => {
      console.log(data);
    });
  }
  getRequest() {
    let api = 'http://a.itying.com/api/productList';
    this.http.get(api).subscribe((res: any) => {
      console.log(res.result);
      this.list = res.result;
    });
  }
}
