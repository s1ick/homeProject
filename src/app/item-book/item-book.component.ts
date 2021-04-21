import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BooksService } from './../books.service';

@Component({
  selector: 'app-item-book',
  templateUrl: './item-book.component.html',
  styleUrls: ['./item-book.component.less'],
})
export class ItemBookComponent implements OnInit {
  pathImg: string = 'http://covers.openlibrary.org/';
  constructor(
    public BooksService: BooksService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {
  }
}
