import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComprobantesComponent } from './comprobantes.component';
import { ComprobantesListComponent } from './comprobantes-list/comprobantes-list.component';
import { ComprobantesCreateComponent } from './comprobantes-create/comprobantes-create.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ComprobantesComponent,
    ComprobantesListComponent,
    ComprobantesCreateComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ]
})
export class ComprobantesModule { }
