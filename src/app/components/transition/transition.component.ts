import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transition',
  templateUrl: './transition.component.html',
  styleUrls: ['./transition.component.less'],
})
export class TransitionComponent implements OnInit {
  public title: string = '我是 transition 组件！！！';
  public msg: string = '我是父组件的msg!!!';
  constructor() {}

  ngOnInit(): void {}
  run() {
    alert('我是父组件的run!!');
  }
}
