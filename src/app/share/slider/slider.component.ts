import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  @Input() set typeSlide(value: string) {
    if (value === 'null'){
      this.type = 'null';
    }
    if (value === 'picture-price'){
      
    }
    if (value === 'null'){
      
    }
    if (value === 'null'){
      
    }
  }

  type: string;

  constructor() { }

  ngOnInit(): void {
  }

  onSlide() {

  }


}
