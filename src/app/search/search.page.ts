import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-search',
  templateUrl: 'search.page.html',
  styleUrls: ['search.page.scss'],
})
export class SearchPage {

  articles;

  searchText: string;

  constructor(private apiService: ApiService) { }

  ionViewDidEnter() {
  }

  search(query: string) {
    this.apiService.searchNews(query).subscribe((data) => {
      this.articles = data['articles'];
    });
  }
}
