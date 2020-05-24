import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NavPageRoutingModule } from './nav-routing.module';

import { NavPage } from './nav.page';
import { ModalbasePage } from './modalbase/modalbase.page';
import { ModalbasePageModule } from './modalbase/modalbase.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NavPageRoutingModule,
    ModalbasePageModule
  ],
  declarations: [NavPage],
  entryComponents: [ModalbasePage]
})
export class NavPageModule {}
