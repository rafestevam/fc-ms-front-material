import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { UsersComponent } from './users.component';
import { UserNewComponent } from './user-new/user-new.component';
import { UsersListComponent } from './users-list/users-list.component';
import { UsersMaterialModule } from './users-material.module';

@NgModule({
  declarations: [UsersComponent, UsersListComponent, UserNewComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    UsersMaterialModule
  ],
  exports: [UsersComponent]
})
export class UsersModule { }
