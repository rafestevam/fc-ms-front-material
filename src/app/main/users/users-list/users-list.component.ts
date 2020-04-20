import { Component, OnInit, Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { User } from 'src/app/core/user/user.model';
import { UserService } from 'src/app/core/user/user.service';

// const profiles: Profile[] = [
//   {
//     avatar: 'assets/img/profiles/avatars/avatar-1.jpg',
//     username: 'user-test-1@fc-collab.com',
//     name: 'Test User 1',
//     createdIn: new Date(),
//     active: false
//   },
//   {
//     avatar: 'assets/img/profiles/avatars/avatar-3.jpg',
//     username: 'user-test-2@fc-collab.com',
//     name: 'Test User 2',
//     createdIn: new Date(),
//     active: false
//   },
//   {
//     avatar: 'assets/img/profiles/avatars/avatar-4.jpg',
//     username: 'user-test-3@fc-collab.com',
//     name: 'Test User 3',
//     createdIn: new Date(),
//     active: false
//   },
//   {
//     avatar: 'assets/img/profiles/avatars/avatar-4.jpg',
//     username: 'user-test-3@fc-collab.com',
//     name: 'Test User 3',
//     createdIn: new Date(),
//     active: false
//   },
// ]

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  displayedColumns = ['avatar', 'username', 'name', 'createdIn', 'active'];
  dataSource = new MatTableDataSource<User>();

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    // this.dataSource.data = profiles;
    this.userService
      .getUsers()
      .subscribe({ 
        next: (users: User[]) => {
          console.log(users);
          this.dataSource.data = users
        },
        error: err => console.log(err)
      });
  }

}
