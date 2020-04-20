import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';
import { UserService } from 'src/app/core/user/user.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { User } from 'src/app/core/user/user.model';

@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.css']
})
export class SidenavListComponent implements OnInit, OnDestroy {

  @Output() sidenavClose = new EventEmitter();
  user: User;
  private subscription: Subscription;

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {
    this.subscription = this.userService
      .getUser()
      .subscribe({
        next: user => {
          this.user = user;
        },
        error: err => console.log(err)
      });
  }

  onCloseSidenav(){
    this.sidenavClose.emit();
  }

  onLogout(){
    this.userService.logout();
    this.router.navigate(['']);
  }

}
