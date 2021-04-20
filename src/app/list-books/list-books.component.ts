import { Component, OnInit } from '@angular/core';
import { BooksService } from './../books.service';

@Component({
  selector: 'app-list-books',
  templateUrl: './list-books.component.html',
  styleUrls: ['./list-books.component.less']
})
export class ListBooksComponent implements OnInit {
  pathImg: string = 'http://covers.openlibrary.org/'
  constructor(public BooksService: BooksService) { }

  ngOnInit(): void {
  }

}
