import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ItemBookComponent } from '../item-book/item-book.component';
import { MatDialog } from '@angular/material/dialog';
import { BooksService } from '../books.service';  // Импортируем сервис
import { NoDataComponent } from '../no-data/no-data.component';
import { LoaderComponent } from '../loader/loader.component';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list-books',
  standalone: true,
  imports: [NoDataComponent, LoaderComponent, NgScrollbarModule, CommonModule],
  templateUrl: './list-books.component.html',
  styleUrls: ['./list-books.component.scss'],
})
export class ListBooksComponent implements OnInit {
  pathImg: string = 'http://covers.openlibrary.org/';
  @ViewChild('img') img!: ElementRef;

  // Имя переменной изменяем на booksService
  constructor(public booksService: BooksService, public dialog: MatDialog) {}

  ngOnInit(): void {}

  openDialog(book: any): void {
    this.dialog.open(ItemBookComponent, {
      width: '800px',
      data: book,
    });
  }

  onImageload(event: Event): void {
    const target = event.target as HTMLImageElement;
    if (target && target.naturalHeight === 1) {
      target.src = 'https://blog.breastmates.co.nz/wp-content/uploads/2019/08/placeholder-images-image_large.png';
    }
  }
}
