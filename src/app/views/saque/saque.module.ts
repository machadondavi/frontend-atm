import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SaqueRoutingModule } from './saque-routing.module';
import { SaqueComponent } from './saque.component';


@NgModule({
  declarations: [
    SaqueComponent
  ],
  imports: [
    CommonModule,
    SaqueRoutingModule
  ]
})
export class SaqueModule { }
