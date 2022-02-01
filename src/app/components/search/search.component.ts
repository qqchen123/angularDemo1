import { Component, OnInit } from '@angular/core';

import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.less'],
})
export class SearchComponent implements OnInit {
  public keyword: string = 'search test';
  public historyList: any[] = [];

  constructor(public storage: StorageService) {
    // let s = this.storage.get();
    // console.log(s);
  }

  ngOnInit(): void {
    // console.log('12312312312312312312');
    var searchlist: any = this.storage.get('searchList');
    if (searchlist) {
      this.historyList = searchlist;
    }
  }

  dosearch() {
    if (this.historyList.indexOf(this.keyword) == -1) {
      this.historyList.push(this.keyword);
      this.storage.set('searchList', this.historyList);
    }
    this.keyword = '';
  }
  delHistry(key: any) {
    // alert(key);
    this.historyList.splice(key, 1);
    this.storage.set('searchList', this.historyList);
  }
}
