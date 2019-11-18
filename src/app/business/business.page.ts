import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-business',
  templateUrl: 'business.page.html',
  styleUrls: ['business.page.scss'],
})
export class BusinessPage {

  articles;
  
  constructor(private apiService: ApiService) { }

  ionViewDidEnter() {
    this.apiService.getNews('business').subscribe((data) => {
      this.articles = data['articles'];
    });
  }
}
