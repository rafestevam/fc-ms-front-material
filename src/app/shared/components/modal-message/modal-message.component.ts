import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ModalType } from './modal-message';

@Component({
  selector: 'app-modal-message',
  templateUrl: './modal-message.component.html',
  styleUrls: ['./modal-message.component.css']
})
export class ModalMessageComponent implements OnInit {

  modalTitle: string;
  modalMessage: string;
  modalClass: string;

  constructor(
    private dialogRef: MatDialogRef<ModalMessageComponent>,
    @Inject(MAT_DIALOG_DATA) data: any) { 
      this.modalClass = this.getModalClass(data.type);
      this.modalTitle = this.getModalTitle(data.type);
      this.modalMessage = data.message;
    }

  ngOnInit(): void {
  }

  close(){
    this.dialogRef.close();
  }

  private getModalClass(modalType: ModalType): string{
    switch (modalType) {
      case ModalType.SUCCESS:
        return 'alert-success';
      case ModalType.DANGER:
        return 'alert-danger';
      case ModalType.INFO:
        return 'alert-primary';
      case ModalType.WARNING:
        return 'alert-warning';
      default:
        return 'alert-info';
    }
  }

  private getModalTitle(modalType: ModalType): string {
    switch (modalType) {
      case ModalType.SUCCESS:
        return 'Sucesso';
      case ModalType.DANGER:
        return 'Erro';
      case ModalType.INFO:
        return 'Info';
      case ModalType.WARNING:
        return 'Aviso';
      default:
        return 'Mensagem';
    }
  }

}
