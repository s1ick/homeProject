import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class BooksService {
  constructor(private http: HttpClient) { }
  response: any;
  searchTitle(author: any) {
    this.http.get('http://openlibrary.org/search.json?author=' + author)
    .subscribe((response) => {
      this.response = response;
      console.log(this.response);
    })
  }
}
