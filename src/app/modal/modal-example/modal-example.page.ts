import { Component, OnInit, Input } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-modal-example',
  templateUrl: './modal-example.page.html',
  styleUrls: ['./modal-example.page.scss'],
})
export class ModalExamplePage implements OnInit {

  // Data passed in by componentProps
  @Input() firstName: string;
  @Input() lastName: string;

  constructor(
    private modalController: ModalController,
    public navParams: NavParams
  ) {
    console.log(navParams.get('firstName'));
  }

  ngOnInit() {
    console.log(this.firstName, this.lastName);
  }

  public dismiss() {
    this.modalController.dismiss({
      dismiss: true
    })
  }



}
