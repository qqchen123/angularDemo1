import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.less'],
})
export class OrderComponent implements OnInit {
  public msg: string = '我是子组件的msg';

  constructor() {}

  ngOnInit(): void {}
  run() {
    alert('我是子组件的run方法');
  }
}
