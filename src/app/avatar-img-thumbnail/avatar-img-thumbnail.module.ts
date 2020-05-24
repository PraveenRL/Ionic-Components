import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AvatarImgThumbnailPageRoutingModule } from './avatar-img-thumbnail-routing.module';

import { AvatarImgThumbnailPage } from './avatar-img-thumbnail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AvatarImgThumbnailPageRoutingModule
  ],
  declarations: [AvatarImgThumbnailPage]
})
export class AvatarImgThumbnailPageModule {}
