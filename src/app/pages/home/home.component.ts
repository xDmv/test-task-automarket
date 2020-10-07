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
    },
    {
      img: "assets/images/slaid1-car3.png",
      distans: "42, 000 km",
      price: "$11 300"
    },
    {
      img: "assets/images/slaid1-car4.png",
      distans: "85, 000 km",
      price: "$8 300"
    },
    {
      img: "assets/images/slaid1-car5.png",
      distans: "33, 000 km",
      price: "$8 570"
    },
    {
      img: "assets/images/slaid1-car6.png",
      distans: "28, 000 km",
      price: "$19 500"
    }
  ]

  Slider3 = [
    {
      img: "assets/images/slaid2-car1.png",
      logo: "assets/images/slaid2-emblem1.png",
      year: "2019",
      name: "BMW series 5"
    },
    {
      img: "assets/images/slaid2-car2.png",
      logo: "assets/images/slaid2-emblem2.png",
      year: "2018",
      name: "Chevrolett Express Cargo"
    },
    {
      img: "assets/images/slaid2-car3.png",
      logo: "assets/images/slaid2-emblem3.png",
      year: "2019",
      name: "Taoyta Prius AWD"
    },
    {
      img: "assets/images/slaid2-car4.png",
      logo: "assets/images/slaid2-emblem4.png",
      year: "2019",
      name: "Ford F -150"
    },
    {
      img: "assets/images/slaid2-car2.png",
      logo: "assets/images/slaid2-emblem2.png",
      year: "2019",
      name: "Chevrolett Express Cargo2"
    }
  ]

  Slider4 = [
    {
      img: "assets/images/slaid3-car1_.png",
      name: "Sedan"
    },
    {
      img: "assets/images/slaid3-car2_.png",
      name: "SUV / Crossover"
    },
    {
      img: "assets/images/slaid3-car3_.png",
      name: "Pickup"
    },
    {
      img: "assets/images/slaid3-car4_.png",
      name: "Coupe"
    },
    {
      img: "assets/images/slaid3-car5_.png",
      name: "Hatchback"
    },
    {
      img: "assets/images/slaid3-car6_.png",
      name: "Van"
    }
  ]

  Slider5 = [
    {
      img: "assets/images/slaid4-car1.png",
      logo: "assets/images/slaid4-emblem1.png",
      year: "2020",
      name: "BMW series 5"
    },
    {
      img: "assets/images/slaid4-car2.png",
      logo: "assets/images/slaid4-emblem2.png",
      year: "2020",
      name: "Ford Mustang GT"
    },
    {
      img: "assets/images/slaid4-car3.png",
      logo: "assets/images/slaid4-emblem3.png",
      year: "2019",
      name: "Taoyta RAV4 AWD"
    },
    {
      img: "assets/images/slaid4-car4.png",
      logo: "assets/images/slaid4-emblem4.png",
      year: "2020",
      name: "Honda CR-V Hybrid"
    }
  ]

  Slider6 = [
    {
      img: "assets/images/slaid5-1.png",
      name: "Peugeot"
    },
    {
      img: "assets/images/slaid5-2.png",
      name: "Volkswagen"
    },
    {
      img: "assets/images/slaid5-3.png",
      name: "Hyundai"
    },
    {
      img: "assets/images/slaid5-4.png",
      name: "Renault"
    },
    {
      img: "assets/images/slaid5-5.png",
      name: "Kia Motors"
    },
    {
      img: "assets/images/slaid5-6.png",
      name: "Toyota"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
