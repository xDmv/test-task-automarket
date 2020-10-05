import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NotfoundComponent} from './pages/notfound/notfound.component';
import {PageRouteModule} from './pages/page-route.module';


const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: 'home', pathMatch: 'full', loadChildren: () => import('./pages/home/home.module').then( m => m.HomeModule)},
  { path: '404', component: NotfoundComponent },
  { path: '**', redirectTo: '404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), PageRouteModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
