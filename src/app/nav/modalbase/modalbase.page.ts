import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-modalbase',
  templateUrl: './modalbase.page.html',
  styleUrls: ['./modalbase.page.scss'],
})
export class ModalbasePage implements OnInit {

  public rootPage: any;

  constructor(
    public modalController: ModalController,
  ) {
  }

  ngOnInit() {
  }

}
