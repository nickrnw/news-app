import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-health',
  templateUrl: 'health.page.html',
  styleUrls: ['health.page.scss'],
})
export class HealthPage {

  articles;

  constructor(private apiService: ApiService) { }

  ionViewDidEnter() {
    this.apiService.getNews('health').subscribe((data) => {
      this.articles = data['articles'];
    });
  }
}
