import { Component, OnInit, Input } from '@angular/core';
import { Profile } from 'src/app/core/profile/profile.model';
import { MatTableDataSource } from '@angular/material/table';

const profiles: Profile[] = [
  {
    avatar: 'assets/img/profiles/avatars/avatar-1.jpg',
    username: 'user-test-1@fc-collab.com',
    name: 'Test User 1',
    createdIn: new Date(),
    active: false
  },
  {
    avatar: 'assets/img/profiles/avatars/avatar-3.jpg',
    username: 'user-test-2@fc-collab.com',
    name: 'Test User 2',
    createdIn: new Date(),
    active: false
  },
  {
    avatar: 'assets/img/profiles/avatars/avatar-4.jpg',
    username: 'user-test-3@fc-collab.com',
    name: 'Test User 3',
    createdIn: new Date(),
    active: false
  },
  {
    avatar: 'assets/img/profiles/avatars/avatar-4.jpg',
    username: 'user-test-3@fc-collab.com',
    name: 'Test User 3',
    createdIn: new Date(),
    active: false
  },
]

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  displayedColumns = ['avatar', 'username', 'name', 'createdIn', 'active'];
  dataSource = new MatTableDataSource<Profile>();

  constructor() { }

  ngOnInit(): void {
    this.dataSource.data = profiles;
  }

}
