import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'actionSheet',
    loadChildren: () => import('./ion-action-sheet/ion-action-sheet.module').then(m => m.IonActionSheetPageModule)
  },
  {
    path: 'alert',
    loadChildren: () => import('./ion-alert/ion-alert.module').then(m => m.IonAlertPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
