import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FabListPageRoutingModule } from './fab-list-routing.module';

import { FabListPage } from './fab-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FabListPageRoutingModule
  ],
  declarations: [FabListPage]
})
export class FabListPageModule {}
