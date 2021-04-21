import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class BooksService {
  constructor(private http: HttpClient) { }
  response: any;
  loader: boolean = false;
  searchTitle(author: any) {
    this.loader = true;
    this.http.get('http://openlibrary.org/search.json?author=' + author)
    .subscribe((response) => {
      this.response = response;
      this.loader = false;
    })
  }
}
