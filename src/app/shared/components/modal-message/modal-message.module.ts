import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatDialogRef, MAT_DIALOG_DATA, MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';

import { ModalMessageComponent } from './modal-message.component';
import { SharedMaterialModule } from '../../shared-material.module';

@NgModule({
  declarations: [ModalMessageComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    SharedMaterialModule
  ],
  exports: [
    ModalMessageComponent
  ],
  entryComponents: [ModalMessageComponent],
  providers: [
    {
      provide: MatDialogRef,
      useValue: {}
    },
    {
      provide: MAT_DIALOG_DATA,
      useValue: {}
    },
    {
      provide: MAT_DIALOG_DEFAULT_OPTIONS,
      useValue: {
        hasBackdrop: true
      }
    }
  ]
})
export class ModalMessageModule { }