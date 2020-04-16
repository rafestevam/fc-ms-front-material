import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';

@NgModule({
    imports: [
        MatDialogModule,
        MatCardModule
    ],
    exports: [
        MatDialogModule,
        MatCardModule
    ],
    declarations: []
})
export class SharedMaterialModule { }