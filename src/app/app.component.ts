import { Component } from '@angular/core';
import { SlidesStore } from './shared/owl-carousel/owl-carousel.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {


  slidesStore: SlidesStore[] = [
    { id: '1', text: 'This IS Slider 1', src: 'https://cdn.pixabay.com/photo/2024/09/06/13/11/beach-9027513_1280.jpg', url: 'https://cdn.pixabay.com/photo/2024/09/06/13/11/beach-9027513_1280.jpg', alt: 'Slide 1', title: 'Slide 1', merge: 1 },
    { id: '2', text: 'This IS Slider 2', src: 'https://cdn.pixabay.com/photo/2022/10/23/13/43/canoe-7541311_1280.jpg', url: 'https://cdn.pixabay.com/photo/2022/10/23/13/43/canoe-7541311_1280.jpg', alt: 'Slide 2', title: 'Slide 2', merge: 2 },
    { id: '3', text: 'This IS Slider 3', src: 'https://cdn.pixabay.com/photo/2019/07/26/09/23/lake-4364335_1280.jpg', url: 'https://cdn.pixabay.com/photo/2019/07/26/09/23/lake-4364335_1280.jpg', alt: 'Slide 3', title: 'Slide 3', merge: 2 },
    { id: '4', text: 'This IS Slider 4', src: 'https://cdn.pixabay.com/photo/2020/09/30/08/29/lake-5614977_1280.jpg', url: 'https://cdn.pixabay.com/photo/2020/09/30/08/29/lake-5614977_1280.jpg', alt: 'Slide 4', title: 'Slide 4', merge: 4 },
    { id: '5', text: 'This IS Slider 5', src: 'https://cdn.pixabay.com/photo/2016/09/09/13/03/canoe-1657069_1280.jpg', url: 'https://cdn.pixabay.com/photo/2016/09/09/13/03/canoe-1657069_1280.jpg', alt: 'Slide 5', title: 'Slide 5', merge: 2 },
    { id: '6', text: 'This IS Slider 6', src: 'https://cdn.pixabay.com/photo/2016/11/18/19/40/woman-1836601_1280.jpg', url: 'https://cdn.pixabay.com/photo/2016/11/18/19/40/woman-1836601_1280.jpg', alt: 'Slide 6', title: 'Slide 6', merge: 2 },
    { id: '7', text: 'This IS Slider 7', src: 'https://cdn.pixabay.com/photo/2020/09/30/08/29/lake-5614977_1280.jpg', url: 'https://cdn.pixabay.com/photo/2020/09/30/08/29/lake-5614977_1280.jpg', alt: 'Slide 4', title: 'Slide 4', merge: 9 },
    { id: '8', text: 'This IS Slider 8', src: 'https://cdn.pixabay.com/photo/2016/09/09/13/03/canoe-1657069_1280.jpg', url: 'https://cdn.pixabay.com/photo/2016/09/09/13/03/canoe-1657069_1280.jpg', alt: 'Slide 5', title: 'Slide 5', merge: 2 },
    { id: '9', text: 'This IS Slider 9', src: 'https://cdn.pixabay.com/photo/2016/11/18/19/40/woman-1836601_1280.jpg', url: 'https://cdn.pixabay.com/photo/2016/11/18/19/40/woman-1836601_1280.jpg', alt: 'Slide 6', title: 'Slide 6', merge: 0 },
  ];

  constructor() {
  }

  ngOnInit() {  }

}
