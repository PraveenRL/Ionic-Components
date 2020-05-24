import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AvatarImgThumbnailPage } from './avatar-img-thumbnail.page';

const routes: Routes = [
  {
    path: '',
    component: AvatarImgThumbnailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AvatarImgThumbnailPageRoutingModule {}
