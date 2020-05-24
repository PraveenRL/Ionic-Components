import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

import { ModalExamplePage } from './modal-example/modal-example.page';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

  constructor(
    private modalController: ModalController
  ) { }

  ngOnInit() {
  }

  public async presentModal() {
    const modal = await this.modalController.create({
      component: ModalExamplePage,
      swipeToClose: true,
      presentingElement: await this.modalController.getTop(),
      componentProps: { //Pass Data
        firstName: "Praveen",
        lastName: "RL"
      },
      animated: true,
      backdropDismiss: true,
      mode: "md",
      showBackdrop: true,
    });
    await modal.present();

    const { data } = await modal.onWillDismiss();
    console.log(data);
  }

}
