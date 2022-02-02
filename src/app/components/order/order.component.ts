import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.less'],
})
export class OrderComponent implements OnInit {
  public orderList: any = [];
  public msg: string = '我是子组件的msg';

  constructor() {}

  ngOnInit(): void {
    for (let i = 0; i < 10; i++) {
      this.orderList.push('ordercontent-' + i);
    }
  }
  run() {
    alert('我是子组件的run方法');
  }
}
