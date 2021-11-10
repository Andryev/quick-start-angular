import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'careca',
    loadChildren: () => import('./careca-front/careca-front.module').then(m => m.CarecaFrontModule)
  },
  {
    path: '',
    redirectTo: 'careca',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
