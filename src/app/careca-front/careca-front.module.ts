import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarecaSearchComponent } from './careca-search/careca-search.component';
import {CarecaRoutingModule} from './careca-routing.module';
import {MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';



@NgModule({
  declarations: [CarecaSearchComponent],
  imports: [
    CommonModule,
    CarecaRoutingModule,
    MatTableModule,
    MatCardModule
  ]
})
export class CarecaFrontModule { }
