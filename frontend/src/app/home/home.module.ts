import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/Http';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HeaderComponent } from './header/header.component';
import { ViruscountComponent } from './viruscount/viruscount.component';
import { CovidgraphComponent } from './covidgraph/covidgraph.component';
import { StatedataComponent } from './statedata/statedata.component';


@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    ViruscountComponent,
    CovidgraphComponent,
    StatedataComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    HttpClientModule
  ]
})
export class HomeModule { }
