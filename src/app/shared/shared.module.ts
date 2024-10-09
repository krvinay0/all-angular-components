import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OwlCarouselComponent } from './owl-carousel/owl-carousel.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { MaterialModule } from '../material/material.module';


const Components_Const = [
  OwlCarouselComponent
];


@NgModule({
  declarations: [
    Components_Const,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    CarouselModule, // import the owl carousel module
  ],
  exports: [
    Components_Const
  ]
})
export class SharedModule { }
