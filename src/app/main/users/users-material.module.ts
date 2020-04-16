import { NgModule } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [],
  imports: [
    MatTabsModule,
    MatTableModule,
    MatCardModule,
    MatButtonModule,
    MatSelectModule
  ],
  exports: [
    MatTabsModule,
    MatTableModule,
    MatCardModule,
    MatButtonModule,
    MatSelectModule
  ]
})
export class UsersMaterialModule { }
