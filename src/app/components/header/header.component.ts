import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less'],
})
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  run() {
    console.log('我是header组件的run方法！！！！');
  }
}
