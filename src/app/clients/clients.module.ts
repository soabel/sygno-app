import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ClientsComponent } from './clients.component';
import { ClientsListComponent } from './clients-list/clients-list.component';


const routes: Routes = [
  {
    path: '', component: ClientsComponent,
    children: [
      { path: '', component: ClientsListComponent }
    ]
  }
]

@NgModule({
  declarations: [
    ClientsComponent, ClientsListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ClientsModule { }
