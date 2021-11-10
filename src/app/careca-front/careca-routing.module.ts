import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CarecaSearchComponent} from './careca-search/careca-search.component';


const routes: Routes = [
  {
    path: 'search', component: CarecaSearchComponent
  },
  {
    path: '',
    redirectTo: 'search',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarecaRoutingModule { }
