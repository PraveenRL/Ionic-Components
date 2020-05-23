import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-ion-alert',
  templateUrl: './ion-alert.page.html',
  styleUrls: ['./ion-alert.page.scss'],
})
export class IonAlertPage implements OnInit {

  constructor(
    private alertController: AlertController
  ) { }

  ngOnInit() {
  }

  public async presentAlert() {
    const alert = await this.alertController.create({
      header: "Alert",
      message: "Single Button",
      buttons: ["OK"]
    });
    await alert.present();
  }

  public async presentAlertMultipleButtons() {
    const alert = await this.alertController.create({
      header: "Alert",
      subHeader: "Subtitle",
      message: "Multiple Buttons",
      buttons: ["Cancel", "Open Modal", "Delete"]
    });
    await alert.present();
  }

  public async presentAlertConfirm() {
    const alert = await this.alertController.create({
      header: "Confirm",
      buttons: [
        {
          text: "Cancel",
          role: "cancel",
          cssClass: "secondary",
          handler: (blah) => {
            console.log('Confirm Cancel: blan');
          }
        },
        {
          text: "Okay",
          handler: () => {
            console.log("Confirm Okay");
          }
        }
      ]
    });
    await alert.present();
  }

  public async presentAlertPrompt() {
    const alert = await this.alertController.create({
      header: "Prompt",
      inputs: [
        {
          name: "name",
          type: "text",
          placeholder: "Name"
        },
        {
          name: "phone",
          type: "number",
          placeholder: "Phone",
          id: "phone",
          value: "12345"
        },
        //multiple input
        {
          name: "paragraph",
          type: "textarea",
          id: "paragraph",
          placeholder: "Paragraph"
        },
        {
          name: 'name3',
          value: 'http://ionicframework.com',
          type: 'url',
          placeholder: 'Favorite site ever'
        },
        // input date with min & max
        {
          name: 'name4',
          type: 'date',
          min: '2017-03-01',
          max: '2018-01-12'
        },
        // input date without min nor max
        {
          name: 'name5',
          type: 'date'
        },
        {
          name: 'name6',
          type: 'number',
          min: -5,
          max: 10
        },
        {
          name: 'name7',
          type: 'number'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: () => {
            console.log('Confirm Ok');
          }
        }
      ]
    });
    await alert.present();
  }

  public async presentAlertRadio() {
    const alert = await this.alertController.create({
      cssClass: 'alert-radio',
      header: 'Radio',
      inputs: [
        {
          name: "radio1",
          type: 'radio',
          label: 'Radio 1',
          value: 'value1',
          checked: true
        },
        {
          name: "radio2",
          type: 'radio',
          label: 'Radio 2',
          value: 'value2',
          checked: true
        },
        {
          name: "radio3",
          type: 'radio',
          label: 'Radio 3',
          value: 'value3',
          checked: true
        },
        {
          name: "radio4",
          type: 'radio',
          label: 'Radio 4',
          value: 'value4',
          checked: false
        },
        {
          name: "radio5",
          type: 'radio',
          label: 'Radio 5',
          value: 'value5',
          checked: false
        },
      ],
      buttons: [
        {
          text: "Cancel",
          role: 'cancel',
          cssClass: 'text-danger',
          handler: () => {
            console.log('Cancel');
          }
        },
        {
          text: 'Okay',
          handler: () => {
            console.log('Okay');
          }
        }
      ]
    });
    await alert.present();
  }

  public async presentAlertCheckBox() {
    const alert = await this.alertController.create({
      header: "Checkbox",
      inputs: [
        {
          type: 'checkbox',
          name: 'yes',
          label: 'Yes',
          value: 'value1',
          checked: true
        },
        {
          type: 'checkbox',
          name: 'no',
          label: 'No',
          value: 'value2',
          checked: false
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel');
          }
        },
        {
          text: 'Okay',
          handler: () => {
            console.log('Okay');
          }
        }
      ],
      backdropDismiss: false,
      mode: 'ios'
    });
    await alert.present();
  }

}
