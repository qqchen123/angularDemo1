import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.less'],
})
export class TodolistComponent implements OnInit {
  public keyword: string = 'search test';
  public historyList: any[] = [];

  constructor(public storage: StorageService) {
    // let s = this.storage.get();
    // console.log(s);
  }

  ngOnInit(): void {
    var todolist: any = this.storage.get('todoList');
    if (todolist) {
      this.historyList = todolist;
    }
  }

  dosearch(e: any) {
    console.log(e);

    if (e.keyCode == 13) {
      if (this.historyList.indexOf(this.keyword) == -1) {
        this.historyList.push({ title: this.keyword, status: false });
      }
      this.keyword = '';
      this.storage.set('todoList', this.historyList);
    }
  }
  delHistry(key: any) {
    // alert(key);
    this.historyList.splice(key, 1);
    this.storage.set('todoList', this.historyList);
  }
  changeList() {
    this.storage.set('todoList', this.historyList);
  }
}
