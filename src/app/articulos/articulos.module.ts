import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticulosComponent } from './articulos.component';
import { ArticulosListComponent } from './articulos-list/articulos-list.component';
import { ArticulosCreateComponent } from './articulos-create/articulos-create.component';
import { RouterModule } from '@angular/router';
import { ArticulosEditComponent } from './articulos-edit/articulos-edit.component';



@NgModule({
  declarations: [
    ArticulosComponent,
    ArticulosListComponent,
    ArticulosCreateComponent,
    ArticulosEditComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class ArticulosModule { }
