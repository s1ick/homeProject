import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-no-data',
  templateUrl: './no-data.component.html',
  styleUrls: ['./no-data.component.less']
})
export class NoDataComponent implements OnInit {
  public imagePath = '../../assets/images';
  @Input() title: string = 'No data found';
  @Input() subTitle: string = `Try adjusting your query to find what you're looking for.`;
  @Input() imgName: string = 'no-data';
  constructor() { }

  ngOnInit(): void {
  }

}
