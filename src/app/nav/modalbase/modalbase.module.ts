import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { RouterModule, Routes } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ModalbasePage } from './modalbase.page';

const routes: Routes = []

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ModalbasePage],
  exports: [ModalbasePage]
})
export class ModalbasePageModule { }
