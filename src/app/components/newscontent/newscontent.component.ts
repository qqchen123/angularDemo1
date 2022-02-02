import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newscontent',
  templateUrl: './newscontent.component.html',
  styleUrls: ['./newscontent.component.less'],
})
export class NewscontentComponent implements OnInit {
  public orderList: any = [];
  constructor() {}

  ngOnInit(): void {
    for (let i = 0; i < 10; i++) {
      this.orderList.push('new content' + i);
    }
  }
}
