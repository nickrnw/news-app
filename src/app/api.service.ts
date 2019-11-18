import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  API_KEY = '';
  
  sourcemap = [
    { name: 'nbc-news', position: 'left' },
    { name: 'cnn', position: 'left' },
    { name: 'cbs-news', position: 'left' },
    { name: 'the-washington-post', position: 'left' },
    { name: 'the-new-york-times', position: 'left' },
    { name: 'usa-today', position: 'left' },
    { name: 'the-wall-street-journal', position: 'left' },
    { name: 'associated-press', position: 'left' },
    { name: 'fox-news', position: 'right' },
    { name: 'axios', position: 'left' },
    { name: 'google-news', position: 'left' },
    { name: 'the-american-conservative', position: 'right' },
    { name: 'reuters', position: 'center' },
    { name: 'the-hill', position: 'center' },
    { name: 'bbc-news', position: 'left' },
    { name: 'cnbc', position: 'left' }
  ];

  constructor(private httpClient: HttpClient) { }

  getNews(category: string) {
    return this.httpClient.get(`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${this.API_KEY}`);
  }

  searchNews(query: string) {
    return this.httpClient.get(`https://newsapi.org/v2/everything?q=${query}&apiKey=${this.API_KEY}`);
  }

  transformSourceID(value: any): string {
    const position = this.sourcemap.find(o => o.name === value);
    if (!position) {
      return 'unknown';
    }
    return position.position;
  }
}
