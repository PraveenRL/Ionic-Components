import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalPageRoutingModule } from './modal-routing.module';

import { ModalPage } from './modal.page';
import { ModalExamplePageModule } from './modal-example/modal-example.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalExamplePageModule,
    ModalPageRoutingModule,
  ],
  declarations: [
    ModalPage
  ],
  exports: [
    ModalPage
  ]
})
export class ModalPageModule { }
