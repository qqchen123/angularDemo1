import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-goods',
  templateUrl: './goods.component.html',
  styleUrls: ['./goods.component.less'],
})
export class GoodsComponent implements OnInit {
  @ViewChild('mybox') mybox: any;
  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    this.mybox.nativeElement.style.width = '200px';
    this.mybox.nativeElement.style.height = '200px';
    this.mybox.nativeElement.style.background = 'red';
  }
}
