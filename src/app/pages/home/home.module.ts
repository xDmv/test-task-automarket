import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ShareModule } from "../../share/share.module";
import { HomeComponent } from "./home.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  }
];

@NgModule({
  declarations: [],
  exports: [RouterModule],
  imports: [
    // CommonModule,
    RouterModule.forChild(routes),
    // ShareModule
  ]
})
export class HomeModule { }
