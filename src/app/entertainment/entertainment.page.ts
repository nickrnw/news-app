import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-entertainment',
  templateUrl: 'entertainment.page.html',
  styleUrls: ['entertainment.page.scss'],
})
export class EntertainmentPage {

  articles;

  constructor(private apiService: ApiService) { }

  ionViewDidEnter() {
    this.apiService.getNews('entertainment').subscribe((data) => {
      this.articles = data['articles'];
    });
  }
}
