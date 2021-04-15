import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticulosCreateComponent } from './articulos/articulos-create/articulos-create.component';
import { ArticulosEditComponent } from './articulos/articulos-edit/articulos-edit.component';
import { ArticulosListComponent } from './articulos/articulos-list/articulos-list.component';
import { ArticulosComponent } from './articulos/articulos.component';
import { LoginComponent } from './auth/login/login.component';
import { ComprobantesCreateComponent } from './comprobantes/comprobantes-create/comprobantes-create.component';
import { ComprobantesListComponent } from './comprobantes/comprobantes-list/comprobantes-list.component';
import { ComprobantesComponent } from './comprobantes/comprobantes.component';
import { AuthGuard } from './core/auth.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { LayoutComponent } from './layout/layout.component';
import { NotFoundComponent } from './page-errors/not-found/not-found.component';

const routes: Routes = [
  // { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: '', component: LayoutComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', component: DashboardComponent },
      {
        path: 'articulos', component: ArticulosComponent,
        children: [
          { path: '', component: ArticulosListComponent },
          { path: 'create', component: ArticulosCreateComponent },
          { path: 'edit/:id', component: ArticulosEditComponent }
        ]
      },
      {
        path: 'comprobantes', component: ComprobantesComponent,
        children: [
          { path: '', component: ComprobantesListComponent },
          { path: 'create', component: ComprobantesCreateComponent }
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
