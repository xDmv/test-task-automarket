import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotfoundComponent } from './notfound/notfound.component';

import { FormsModule } from '@angular/forms';
import { PageRouteModule } from './page-route.module';
import { ShareModule } from '../share/share.module';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [NotfoundComponent, HomeComponent],
  imports: [
    CommonModule,
    FormsModule,
    PageRouteModule,
    ShareModule
  ]
})
export class PagesModule { }
