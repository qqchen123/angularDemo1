import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ordercontent',
  templateUrl: './ordercontent.component.html',
  styleUrls: ['./ordercontent.component.less'],
})
export class OrdercontentComponent implements OnInit {
  constructor(public activeRout: ActivatedRoute) {}

  ngOnInit(): void {
    //获取动态路由传值
    this.activeRout.params.subscribe((data) => {
      console.log(data);
    });
  }
}
