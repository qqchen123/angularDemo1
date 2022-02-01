import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.less'],
})
export class FormComponent implements OnInit {
  public peopleInfo: any = {
    username: 'qqchen',
    sex: '1',
    cityList: ['beijing', 'shanghai', 'shenzhen'],
    city: 'beijing',
    hobby: [
      {
        title: 'eat',
        checked: false,
      },
      {
        title: 'coding',
        checked: true,
      },
      {
        title: 'watch TV',
        checked: false,
      },
    ],
    remark: '',
  };
  constructor() {}

  ngOnInit(): void {}

  doSub() {
    console.log(this.peopleInfo);
  }
}
