import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalExamplePage } from './modal-example.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
  ],
  declarations: [
    ModalExamplePage
  ],
  entryComponents:[
    ModalExamplePage
  ]
})
export class ModalExamplePageModule { }
