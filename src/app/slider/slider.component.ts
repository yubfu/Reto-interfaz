import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})

export class SliderComponent implements OnInit {
    peliculas:any[]=[

    {
      name: 'Admisiones',
      img: 'assets/slider/3.png',
      desc: ''
    },
    {
      name: 'Desercíon',
      img: 'assets/slider/1.jpg',
      desc: ''
    },
    {
      name: 'Ing',
      img: 'assets/slider/2.png',
      desc: ''
    }
  ];

  constructor(private _config: NgbCarouselConfig) {
    _config.interval = 4000;
    _config.pauseOnHover = true;
    _config.showNavigationArrows = false;
  }

  ngOnInit() {
  }
}
