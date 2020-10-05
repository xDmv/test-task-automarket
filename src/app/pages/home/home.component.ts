import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  Slider2 = [
    {
      img: "assets/images/slaid1-car1.png",
      distans: "85, 000 km",
      price: "$8 300"
    },
    {
      img: "assets/images/slaid1-car2.png",
      distans: "67, 000 km",
      price: "$12 500"
    }
  ]


  constructor() { }

  ngOnInit(): void {
  }

}
