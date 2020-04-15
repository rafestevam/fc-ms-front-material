import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { HomeComponent } from './home.component';
import { HomeMaterialModule } from './home-material.module';



@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    FormsModule,
    FlexLayoutModule,
    HomeMaterialModule
  ],
  exports: [HomeComponent]
})
export class HomeModule { }
