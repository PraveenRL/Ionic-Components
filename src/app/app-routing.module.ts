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
  },
  {
    path: 'badge',
    loadChildren: () => import('./badge/badge.module').then(m => m.BadgePageModule)
  },
  {
    path: 'button',
    loadChildren: () => import('./button/button.module').then(m => m.ButtonPageModule)
  },
  {
    path: 'ripple',
    loadChildren: () => import('./ripple-effect/ripple-effect.module').then(m => m.RippleEffectPageModule)
  },
  {
    path: 'card',
    loadChildren: () => import('./card/card.module').then(m => m.CardPageModule)
  },
  {
    path: 'checkbox',
    loadChildren: () => import('./checkbox/checkbox.module').then(m => m.CheckboxPageModule)
  },
  {
    path: 'chip',
    loadChildren: () => import('./chip/chip.module').then(m => m.ChipPageModule)
  },
  {
    path: 'content',
    loadChildren: () => import('./content/content.module').then(m => m.ContentPageModule)
  },
  {
    path: 'datetime',
    loadChildren: () => import('./datetime/datetime.module').then(m => m.DatetimePageModule)
  },
  {
    path: 'fab',
    loadChildren: () => import('./fab/fab.module').then(m => m.FabPageModule)
  },
  {
    path: 'fab-button',
    loadChildren: () => import('./fab-button/fab-button.module').then(m => m.FabButtonPageModule)
  },
  {
    path: 'fab-list',
    loadChildren: () => import('./fab-list/fab-list.module').then(m => m.FabListPageModule)
  },
  {
    path: 'grid',
    loadChildren: () => import('./grid/grid.module').then(m => m.GridPageModule)
  },
  {
    path: 'input',
    loadChildren: () => import('./input/input.module').then( m => m.InputPageModule)
  },
  {
    path: 'item',
    loadChildren: () => import('./item/item.module').then( m => m.ItemPageModule)
  },
  {
    path: 'item-group',
    loadChildren: () => import('./item-group/item-group.module').then( m => m.ItemGroupPageModule)
  },
  {
    path: 'item-sliding',
    loadChildren: () => import('./item-sliding/item-sliding.module').then( m => m.ItemSlidingPageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then( m => m.ListPageModule)
  },
  {
    path: 'virtual-scroll',
    loadChildren: () => import('./virtual-scroll/virtual-scroll.module').then( m => m.VirtualScrollPageModule)
  },
  {
    path: 'avatar-img-thumbnail',
    loadChildren: () => import('./avatar-img-thumbnail/avatar-img-thumbnail.module').then( m => m.AvatarImgThumbnailPageModule)
  },
  {
    path: 'modal',
    loadChildren: () => import('./modal/modal.module').then( m => m.ModalPageModule)
  },
  {
    path: 'nav',
    loadChildren: () => import('./nav/nav.module').then( m => m.NavPageModule)
  },
  {
    path: 'popover',
    loadChildren: () => import('./popover/popover.module').then( m => m.PopoverPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
