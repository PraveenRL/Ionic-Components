import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NavPage } from './nav.page';

const routes: Routes = [
  {
    path: '',
    component: NavPage
  },
  {
    path: 'modalbase',
    loadChildren: () => import('./modalbase/modalbase.module').then( m => m.ModalbasePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NavPageRoutingModule {}
