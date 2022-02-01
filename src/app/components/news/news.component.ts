import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.less'],
})
export class NewsComponent implements OnInit {
  public title = 'wo shi  xin wen----ts';
  public msg = ' woshi yige msg';
  public userInfo: string = 'woshi user info';
  public student: any = 'woshi xuesheng';
  public userobj: any = {
    username: 'qqchen',
    age: 12,
    address: 'shanghai',
  };
  public message: any;
  public content = '<h2>woshi h2</h2>';
  public arr = ['11111', '2222', '33333'];
  public userlist = [
    {
      username: 'zhangsan',
      age: 12,
      address: 'shanhai',
    },
    {
      username: 'lisi',
      age: 13,
      address: 'shenzhen',
    },
    {
      username: 'wangwu',
      age: 14,
      address: 'beijing',
    },
  ];
  public cars = [
    {
      cate: 'baoma',
      list: [
        {
          title: 'x1',
          price: 20,
        },
        {
          title: 'x2',
          price: 23,
        },
      ],
    },
    {
      cate: 'aodi',
      list: [
        {
          title: 'a6',
          price: 24,
        },
      ],
    },
  ];
  constructor() {
    this.message = 'constructor message';
  }

  ngOnInit(): void {}
}
