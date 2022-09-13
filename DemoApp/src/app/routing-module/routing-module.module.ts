import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoutingModuleRoutingModule } from './routing-module-routing.module';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ResultComponent } from './result/result.component';
import { GraphComponent } from './graph/graph.component';
import { AccuracyComponent } from './accuracy/accuracy.component';
import { PowerBIComponent } from './power-bi/power-bi.component';


@NgModule({
  declarations: [
    LoginComponent,
    HomeComponent,
    ResultComponent,
    GraphComponent,
    AccuracyComponent,
    PowerBIComponent,

    
  ],
  imports: [
    CommonModule,
    RoutingModuleRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    LoginComponent,
    HomeComponent
  ]
})
export class RoutingModuleModule { }
