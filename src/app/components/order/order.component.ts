import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.less'],
})
export class OrderComponent implements OnInit {
  public orderList: any = [];
  public msg: string = '我是子组件的msg';

  constructor(public router: Router) {}

  ngOnInit(): void {
    for (let i = 0; i < 10; i++) {
      this.orderList.push('ordercontent-' + i);
    }
  }
  run() {
    alert('我是子组件的run方法');
  }
  jsUrl() {
    // 适合普通路由和动态路由
    this.router.navigate(['ordercontent/', 12323123]);
  }
  goToHome() {
    this.router.navigate(['home']);
  }
  getToUrl() {
    // alert(12312);
    let queryParams: NavigationExtras = {
      queryParams: { aid: 33333 },
    };
    this.router.navigate(['/home'], queryParams);
  }
}
