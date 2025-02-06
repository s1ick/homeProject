import { Component, Inject } from '@angular/core';
import { BooksService } from '../books.service';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-item-book',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatDialogModule ],
  templateUrl: './item-book.component.html',
  styleUrls: ['./item-book.component.scss'],
})
export class ItemBookComponent {
  pathImg: string = 'http://covers.openlibrary.org/';
  constructor(
    public booksService: BooksService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {
    // Добавить обработку ошибок, если data не содержит необходимых полей
    if (!this.data || !this.data.title) {
      console.error('No data available for the book');
    }
  }
}
