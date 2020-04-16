import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  dataSource = [
    {
      'avatar': 'assets/img/profiles/avatars/avatar-1.jpg',
      'username': 'user-test-1@fc-collab.com',
      'name': 'Test User 1',
      'active': false
    },
    {
      'avatar': 'assets/img/profiles/avatars/avatar-3.jpg',
      'username': 'user-test-2@fc-collab.com',
      'name': 'Test User 2',
      'active': false
    },
    {
      'avatar': 'assets/img/profiles/avatars/avatar-4.jpg',
      'username': 'user-test-3@fc-collab.com',
      'name': 'Test User 3',
      'active': false
    },
    {
      'avatar': 'assets/img/profiles/avatars/avatar-4.jpg',
      'username': 'user-test-3@fc-collab.com',
      'name': 'Test User 3',
      'active': false
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
