import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-sports',
  templateUrl: 'sports.page.html',
  styleUrls: ['sports.page.scss'],
})
export class SportsPage {

  articles;

  constructor(private apiService: ApiService) { }

  ionViewDidEnter() {
    this.apiService.getNews('sports').subscribe((data) => {
      this.articles = data['articles'];
    });
  }
}
