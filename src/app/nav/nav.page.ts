import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

import { ModalbasePage } from './modalbase/modalbase.page';
import { AvatarImgThumbnailPage } from '../avatar-img-thumbnail/avatar-img-thumbnail.page';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.page.html',
  styleUrls: ['./nav.page.scss'],
})
export class NavPage implements OnInit {

  constructor(
    private modalController: ModalController
  ) { }

  ngOnInit() {
  }

  public async presentModal(){
    const modal = await this.modalController.create({
      component: ModalbasePage,
      componentProps: {
        rootPage: AvatarImgThumbnailPage,
        navModal: true
      },
    });
    await modal.present();
  }

}
