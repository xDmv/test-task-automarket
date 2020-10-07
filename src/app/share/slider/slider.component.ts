import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  slideNull: number;
  activeItem: boolean;
  translateX: string;
  coefficient: number;
  shown = null;
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
    if (value === 'best-selling'){
      this.type = 'best-selling';
    }
    if (value === 'emblem-car'){
      this.type = 'emblem-car';
    }
  }

  type: string;

  constructor() { 
    this.coefficient = 0;
  }

  ngOnInit(): void {
  }

  onSlideTo(value: number) {
    this.slideNull = value;
  }

  onShowItem() {
    this.activeItem = true;
    console.log('true');
  }

  onHideItem() {
    this.activeItem = false;
  }

  onPrev() {
    let x = this.dataSourse.length - 4;
    if( this.coefficient >= x ) return;
    this.coefficient ++;
    const transform = 25*1.03 * this.coefficient;
    console.log('transform: ', transform)
    this.translateX = `translateX(-${transform}%)`;
  }

  onNext(){
    let x = this.dataSourse.length - 4;
    if( this.coefficient === 0 ) return;
    this.coefficient = this.coefficient - 1;
    const transform = (25*1.03 * this.coefficient) * -1;
    this.translateX = `translateX(${transform}%)`;
  }

  toggleShown(index) {
    if (this.onShow(index)) {
			this.shown = null;
    } else {
      this.shown = index;
    }
  }

  onShow(index) {
    return this.shown === index;
  }

}
