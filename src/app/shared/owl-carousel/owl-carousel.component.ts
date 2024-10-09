import { Component, Input } from '@angular/core';
import { OwlOptions, SlidesOutputData } from 'ngx-owl-carousel-o';

export interface SlidesStore {
  id?: string;
  text?: string;
  src?: string;
  url: string;
  alt?: string;
  title?: string;
  merge?: number;
}

@Component({
  selector: 'app-owl-carousel',
  templateUrl: './owl-carousel.component.html',
  styleUrls: ['./owl-carousel.component.scss']
})
export class OwlCarouselComponent {

  @Input() slidesStore: SlidesStore[] = [];
  @Input() loop: boolean = true;
  @Input() autoplay: boolean = true;
  @Input() autoplayTimeout: number = 3000;
  @Input() autoplayHoverPause: boolean = true;

  @Input() isRedirectLink: boolean = true;
  @Input() isImageCaption: boolean = true;
  
  // slidesStore: SlidesStore[] = [];



  isDragging: boolean = false;

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: true,
    autoHeight: true,
    navSpeed: 700,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    navText: ['<span> < </span>', '<span> > </span>'],
    // navText: ['','' ],
    // navText: [ '<i class="fa-chevron-left"></i>', '<i class="fa-chevron-right></i>"' ]
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true,
  };


  activeSlides!: SlidesOutputData;

  constructor() {
    setTimeout(() => {
      // this.slidesStore = this.slidesData;
      this.customOptions.loop = this.loop;
      this.customOptions.autoplay = this.autoplay;
      this.customOptions.autoplayTimeout = this.autoplayTimeout;
      this.customOptions.autoplayHoverPause = this.autoplayHoverPause;
    }, 1000);
  }

}
