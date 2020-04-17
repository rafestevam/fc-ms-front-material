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

  success(message: string){
    this.dialogConfig.data = {
      message,
      type: ModalType.SUCCESS
    };
    this.openDialog();
  }

  danger(message: string){
    this.dialogConfig.data = {
      message,
      type: ModalType.DANGER
    };
    this.openDialog();
  }

  warn(message: string){
    this.dialogConfig.data = {
      message,
      type: ModalType.WARNING
    };
    this.openDialog();
  }

  info(message: string){
    this.dialogConfig.data = {
      message,
      type: ModalType.INFO
    };
    this.openDialog();
  }

  private openDialog(){
    this.dialog.open(ModalMessageComponent, this.dialogConfig);
  }
}
