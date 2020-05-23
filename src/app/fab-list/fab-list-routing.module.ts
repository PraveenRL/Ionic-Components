import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FabListPage } from './fab-list.page';

const routes: Routes = [
  {
    path: '',
    component: FabListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FabListPageRoutingModule {}
