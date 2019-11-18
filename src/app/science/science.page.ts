import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-science',
  templateUrl: 'science.page.html',
  styleUrls: ['science.page.scss'],
})
export class SciencePage {

  articles;

  constructor(private apiService: ApiService) { }

  ionViewDidEnter() {
    this.apiService.getNews('science').subscribe((data) => {
      this.articles = data['articles'];
    });
  }
}
