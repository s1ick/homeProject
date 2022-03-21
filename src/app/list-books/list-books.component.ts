import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { BooksService } from './../books.service';
import { MatDialog } from '@angular/material/dialog';
import { ItemBookComponent } from './../item-book/item-book.component';

@Component({
  selector: 'app-list-books',
  templateUrl: './list-books.component.html',
  styleUrls: ['./list-books.component.less'],
  encapsulation: ViewEncapsulation.None,
})
export class ListBooksComponent implements OnInit {
  pathImg: string = 'http://covers.openlibrary.org/';
  @ViewChild('img') img!: ElementRef;
  arrBooks: any;
  constructor(public BooksService: BooksService, public dialog: MatDialog) {}
  ngOnInit(): void {}
  openDialog(book: any) {
    const dialogRef = this.dialog.open(ItemBookComponent, {
      width: '480px',
      data: book,
    });
  }
  onImageload(e: any) {
    if(e.target && e.target.naturalHeight == 1 ) {
      e.target.src = 'https://blog.breastmates.co.nz/wp-content/uploads/2019/08/placeholder-images-image_large.png';
  }
  }
}
