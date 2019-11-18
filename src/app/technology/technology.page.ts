import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-technology',
  templateUrl: 'technology.page.html',
  styleUrls: ['technology.page.scss'],
})
export class TechnologyPage {

  articles;

  constructor(private apiService: ApiService) { }

  ionViewDidEnter() {
    this.apiService.getNews('technology').subscribe((data) => {
      this.articles = data['articles'];
    });
  }
}
