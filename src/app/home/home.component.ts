import { Component, OnInit } from '@angular/core';
import { ModalMessageService } from '../shared/components/modal-message/modal-message.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private mdService: ModalMessageService) { }

  ngOnInit(): void {
  }

  onClick() {
    this.mdService.openDialog();
  }

}
