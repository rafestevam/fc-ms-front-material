import { Component, OnInit, OnDestroy } from '@angular/core';
import { ModalMessageService } from '../shared/components/modal-message/modal-message.service';
import { AuthService } from '../core/auth/auth.service';
import { AuthData } from '../core/auth/auth-data.model';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy{

  private subscription: Subscription;

  constructor(
    private mdService: ModalMessageService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {
  }

  // onClick() {
  //   this.mdService.openDialog();
  // }

  login(form: NgForm){
    console.log(form);
    this.subscription = this.authService
    .login({
      username: form.value.email,
      password: form.value.password
    })
    .subscribe(
      () => {
        console.log('logado!');
        this.router.navigate(['app']);
      },
      err => {
        form.reset;
        this.mdService.danger(err.error.message);
      }
    )
  }

}
