import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.less'],
})
export class UserComponent implements OnInit {
  @ViewChild('order') order: any;

  constructor() {}

  ngOnInit(): void {}
  getchildmsg() {
    alert(this.order.msg);
  }
  getchildrun() {
    this.order.run();
  }
}
