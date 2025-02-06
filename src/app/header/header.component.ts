import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { BooksService } from '../books.service';
import { debounceTime, distinctUntilChanged, fromEvent, map } from 'rxjs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, FormsModule, MatFormFieldModule, MatInputModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, AfterViewInit {
  @ViewChild('input') input!: ElementRef<HTMLInputElement>;
  author: string = '';

  constructor(public booksService: BooksService) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    fromEvent<KeyboardEvent>(this.input.nativeElement, 'keyup')
      .pipe(
        distinctUntilChanged(),
        debounceTime(500),
        map((event: KeyboardEvent) => {
          const target = event.target as HTMLInputElement;
          const author = target.value;
          if (author.trim()) {  // Если значение введено
            this.booksService.searchTitle(author).subscribe(response => {
              // Обработка ответа, если нужно
              console.log(response);  // Или можно вывести результат в компонент
            });
          }
        })
      )
      .subscribe();
  }
}
