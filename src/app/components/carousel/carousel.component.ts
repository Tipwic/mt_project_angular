import { Component, OnInit } from '@angular/core';
import { MatCarouselSlide, MatCarouselSlideComponent } from '@ngmodule/material-carousel';
import { fadeInAnimation } from '../../_shared/animation';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],    
  animations: [fadeInAnimation],
  host: { '[@fadeInAnimation]': '' }
})
export class CarouselComponent implements OnInit {

  slides = [
    "../assets/img/default_article_main.png",
    "../assets/img/default_article_main.png",
    "../assets/img/default_article_main.png"
  ]

  constructor() { }

  ngOnInit() {
  }

}
