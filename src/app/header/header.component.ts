import { HttpClient } from '@angular/common/http';
import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { fromEvent } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { BooksService } from './../books.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less'],
})
export class HeaderComponent implements OnInit, AfterViewInit {
  @ViewChild('input') input!: ElementRef;
  author: string = '';
  resultEvent: any;
  constructor(public BooksService: BooksService, private http: HttpClient) {}
  ngOnInit(): void {}
  ngAfterViewInit(): void {
    fromEvent(this.input.nativeElement, 'keyup')
      .pipe(
        map((event: any) => {
          this.BooksService.searchTitle(event.target.value);
          console.log(event.target.value);
          return  this.resultEvent = event.target.value;
        })
      )
      .subscribe();
  }
}
