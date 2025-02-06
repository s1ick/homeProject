import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';

interface BookSearchResponse {
  docs: Array<any>;
}

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  public response: any;  // Сделали public
  public loader: boolean = false; // Сделали public

  constructor(private http: HttpClient) {}

  searchTitle(author: string): Observable<any> {
    this.loader = true;

    return this.http.get('http://openlibrary.org/search.json?author=' + author).pipe(
      tap((response) => {
        this.response = response;
        this.loader = false;
      }),
      catchError((error: HttpErrorResponse) => {
        this.loader = false;
        console.error('Ошибка при запросе к API:', error);
        return of(null);
      })
    );
  }

  getResponse(): any {
    return this.response;
  }

  isLoading(): boolean {
    return this.loader;
  }
}
