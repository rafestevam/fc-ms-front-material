import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';

import { HomeComponent } from './home.component';
import { HomeMaterialModule } from './home-material.module';
import { ModalMessageModule } from '../shared/components/modal-message/modal-message.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    FlexLayoutModule,
    HomeMaterialModule,
    ModalMessageModule
  ],
  exports: [HomeComponent]
})
export class HomeModule { }
