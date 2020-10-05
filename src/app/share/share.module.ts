import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SliderComponent } from './slider/slider.component';


@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    SliderComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SliderComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class ShareModule { }
