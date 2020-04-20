import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MainComponent } from './main.component';
import { MainMaterialModule } from './main-material.module';
import { HeaderComponent } from './header/header.component';
import { SidenavListComponent } from './sidenav-list/sidenav-list.component';
import { MainRoutingModule } from './main-routing.module';
import { UsersModule } from './users/users.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { RequestInterceptor } from '../core/auth/request.interceptor';

@NgModule({
  declarations: [
    MainComponent, 
    HeaderComponent, 
    SidenavListComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MainMaterialModule,
    MainRoutingModule,
    UsersModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RequestInterceptor,
      multi: true
    }
  ]
})
export class MainModule { }
