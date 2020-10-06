import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  slideNull: number;
  @Input() dataSourse: any;

  @Input() set typeSlide(value: string) {
    if (value === 'null'){
      this.type = 'null';
      this.slideNull = 0;
    }
    if (value === 'picture-price'){
      this.type = 'picture-price';
    }
    if (value === 'by-car'){
      this.type = 'by-car';
    }
    if (value === 'emblem-car'){
      this.type = 'emblem-car';
    }
  }

  type: string;

  constructor() { }

  ngOnInit(): void {
  }

  onSlideTo(value: number) {
    this.slideNull = value;
  }


}
