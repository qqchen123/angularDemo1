import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less'],
})
export class HomeComponent implements OnInit {
  public picUrl =
    'https://img1.dsb.cn/topics/57_1642212371.png?x-oss-process=style/220_140';
  public list: any[] = [
    { title: 'wo shi xin wen 1' },
    { title: 'wo shi xin wen 2' },
    { title: 'wo shi xin wen 3' },
  ];
  public flag: boolean = false;
  public score: any = 80;
  public color: string = 'green';
  public today: any = new Date();
  public title: string = 'woshi title';
  public keywords: any;

  constructor() {}

  ngOnInit(): void {}
  run() {
    alert(123123);
  }
  getData() {
    alert(this.title);
  }

  setData() {
    this.title = 'title admin';
  }
  keyclick(e: any) {
    // alert('key  down');
    // alert(e);
    // console.log(e);
    console.log(e);
  }
  changemvvm() {
    this.keywords = '345345345';
  }
}
