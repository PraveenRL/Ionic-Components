import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

import { PopoverComponent } from './popover-component/popover.component';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.page.html',
  styleUrls: ['./popover.page.scss'],
})
export class PopoverPage implements OnInit {

  constructor(
    private popoverController: PopoverController
  ) { }

  ngOnInit() {
  }

  public async presentPopover() {
    const popover = await this.popoverController.create({
      component: PopoverComponent,
      componentProps: {
        popoverData: "Popover Data"
      },
      translucent: true,
      mode: "ios",
    });
    await popover.present();
  }

}
