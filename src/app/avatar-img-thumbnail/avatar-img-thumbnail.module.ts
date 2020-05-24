import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AvatarImgThumbnailPageRoutingModule } from './avatar-img-thumbnail-routing.module';

import { AvatarImgThumbnailPage } from './avatar-img-thumbnail.page';

import { BadgePage } from '../badge/badge.page';
import { BadgePageModule } from '../badge/badge.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AvatarImgThumbnailPageRoutingModule,
    BadgePageModule
  ],
  declarations: [AvatarImgThumbnailPage],
  entryComponents: [BadgePage]
})
export class AvatarImgThumbnailPageModule {}
