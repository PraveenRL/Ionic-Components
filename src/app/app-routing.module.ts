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
  },
  {
    path: 'loading',
    loadChildren: () => import('./loading/loading.module').then( m => m.LoadingPageModule)
  },
  {
    path: 'progress',
    loadChildren: () => import('./progress/progress.module').then( m => m.ProgressPageModule)
  },
  {
    path: 'skeleton',
    loadChildren: () => import('./skeleton/skeleton.module').then( m => m.SkeletonPageModule)
  },
  {
    path: 'spinner',
    loadChildren: () => import('./spinner/spinner.module').then( m => m.SpinnerPageModule)
  },
  {
    path: 'radio',
    loadChildren: () => import('./radio/radio.module').then( m => m.RadioPageModule)
  },
  {
    path: 'range',
    loadChildren: () => import('./range/range.module').then( m => m.RangePageModule)
  },
  {
    path: 'refresher',
    loadChildren: () => import('./refresher/refresher.module').then( m => m.RefresherPageModule)
  },
  {
    path: 'reorder',
    loadChildren: () => import('./reorder/reorder.module').then( m => m.ReorderPageModule)
  },
  {
    path: 'searchbar',
    loadChildren: () => import('./searchbar/searchbar.module').then( m => m.SearchbarPageModule)
  },
  {
    path: 'segment',
    loadChildren: () => import('./segment/segment.module').then( m => m.SegmentPageModule)
  },
  {
    path: 'select',
    loadChildren: () => import('./select/select.module').then( m => m.SelectPageModule)
  },
  {
    path: 'slides',
    loadChildren: () => import('./slides/slides.module').then( m => m.SlidesPageModule)
  },
  {
    path: 'tab',
    loadChildren: () => import('./tab/tab.module').then( m => m.TabPageModule)
  },
  {
    path: 'toast',
    loadChildren: () => import('./toast/toast.module').then( m => m.ToastPageModule)
  },
  {
    path: 'toggle',
    loadChildren: () => import('./toggle/toggle.module').then( m => m.TogglePageModule)
  },
  {
    path: 'toolbar',
    loadChildren: () => import('./toolbar/toolbar.module').then( m => m.ToolbarPageModule)
  },
  {
    path: 'header',
    loadChildren: () => import('./header/header.module').then( m => m.HeaderPageModule)
  },
  {
    path: 'back-button',
    loadChildren: () => import('./back-button/back-button.module').then( m => m.BackButtonPageModule)
  },
  {
    path: 'text',
    loadChildren: () => import('./text/text.module').then( m => m.TextPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
