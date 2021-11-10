import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CarecaFrontModule} from './careca-front/careca-front.module';
import {CarecaSearchService} from './careca-front/careca-search/careca-search.service';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarecaFrontModule,
    HttpClientModule
  ],
  providers: [
    CarecaSearchService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
