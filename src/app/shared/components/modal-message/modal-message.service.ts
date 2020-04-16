import { Injectable } from '@angular/core';
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { ModalType } from './modal-message';
import { ModalMessageComponent } from './modal-message.component';

@Injectable({
  providedIn: 'root'
})
export class ModalMessageService {

  private dialogConfig: MatDialogConfig = new MatDialogConfig();

  constructor(private dialog: MatDialog) { }

  openDialog(){
    this.dialogConfig.data = {
      message: 'Isso é um Teste!',
      type: ModalType.SUCCESS
    }
    this.dialog.open(ModalMessageComponent, this.dialogConfig);
  }
}
