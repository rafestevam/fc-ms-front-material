import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main.component';
import { UsersComponent } from './users/users.component';

const childRoutes: Routes = [
  {
    path: 'app',
    component: MainComponent,
    children: [
      {
        path: 'users',
        component: UsersComponent
      }
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(childRoutes)
  ],
  exports: [RouterModule]
})
export class MainRoutingModule { }
