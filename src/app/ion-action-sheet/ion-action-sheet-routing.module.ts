import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IonActionSheetPage } from './ion-action-sheet.page';

const routes: Routes = [
  {
    path: '',
    component: IonActionSheetPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IonActionSheetPageRoutingModule {}
