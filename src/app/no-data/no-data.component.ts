import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-no-data',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './no-data.component.html',
  styleUrls: ['./no-data.component.scss'],
})
export class NoDataComponent {
  public imagePath = 'images';
  @Input() title: string = 'No data found';
  @Input() subTitle: string = `Try adjusting your query to find what you're looking for.`;
  @Input() imgName: string = 'no-data';
}
