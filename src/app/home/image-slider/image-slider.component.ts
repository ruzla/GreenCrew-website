import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.scss']
})
export class ImageSliderComponent implements OnInit {
  images = [
    { img: "../../../assets/images/14708823298_ca68829aa0_o2-960x320.jpg" },
    { img: "../../../assets/images/15501747686_d6da61ec4f_o-1-960x320.jpg" },
    { img: "../../../assets/images/The-Crew-1-960x320.jpg" }
  ];

  slideConfig = {
    "slidesToShow": 1,
    "slidesToScroll": 1,
    "dots": true,
    "infinite": true,
    "autoplay": true,
    "autoplaySpeed": 1500
};

  constructor() { }

  ngOnInit() {
  }
}
