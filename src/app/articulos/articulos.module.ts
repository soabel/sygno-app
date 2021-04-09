import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticulosComponent } from './articulos.component';
import { ArticulosListComponent } from './articulos-list/articulos-list.component';
import { ArticulosCreateComponent } from './articulos-create/articulos-create.component';
import { RouterModule } from '@angular/router';
import { ArticulosEditComponent } from './articulos-edit/articulos-edit.component';
import { ArticulosService } from '../services/articulos.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ArticulosComponent,
    ArticulosListComponent,
    ArticulosCreateComponent,
    ArticulosEditComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  // providers:[ArticulosService]
})
export class ArticulosModule { }
