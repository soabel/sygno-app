import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticulosCreateComponent } from './articulos/articulos-create/articulos-create.component';
import { ArticulosEditComponent } from './articulos/articulos-edit/articulos-edit.component';
import { ArticulosListComponent } from './articulos/articulos-list/articulos-list.component';
import { ArticulosComponent } from './articulos/articulos.component';
import { LoginComponent } from './auth/login/login.component';
import { LayoutComponent } from './layout/layout.component';
import { NotFoundComponent } from './page-errors/not-found/not-found.component';

const routes: Routes = [
  // { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: '', component: LayoutComponent,
    children: [
      {
        path: 'articulos', component: ArticulosComponent,
        children: [
          { path: 'list', component: ArticulosListComponent },
          { path: 'create', component: ArticulosCreateComponent },
          { path: 'edit/:id', component: ArticulosEditComponent }
        ]
      },
    ]
  },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
