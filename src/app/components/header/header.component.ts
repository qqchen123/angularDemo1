import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less'],
})
export class HeaderComponent implements OnInit {
  //接收父组件传来的数据
  @Input() title: any;
  @Input() msg: any;
  @Input() runp: any;
  @Input() home: any;
  constructor() {}

  ngOnInit(): void {}

  run() {
    console.log('我是header组件的run方法！！！！');
  }
  getParentData() {
    alert(this.msg);
  }
  getParentRun() {
    // this.runp();
    alert(this.home.msg);
    this.home.run();
  }
}
