import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.page.html',
  styleUrls: ['./toast.page.scss'],
})
export class ToastPage implements OnInit {

  constructor(
    private toastController: ToastController
  ) { }

  ngOnInit() {
  }

  public async presentToast() {
    let toast = await this.toastController.create({
      message: "Normal Toast1",
      duration: 2000,
      mode: "ios"
    });
    await toast.present();
  }

  public async presentToastWithOptions() {
    let toast = await this.toastController.create({
      header: "Toast Options",
      message: "Toast with options",
      position: "top",
      color: "warning",
      duration: 2000,
      buttons: [
        {
          side: "start",
          icon: "star",
          text: "Favourite",
          handler: () => {
            window.alert("Favourite clicked")
          }
        },
        {
          text: "Cancel",
          role: "cancel",
          handler:() => {
            window.alert("Cancel Clicked")
          }
        }
      ]
    });
    await toast.present();
  }

  public async presentToastWithOptionsIOS() {
    let toast = await this.toastController.create({
      header: "Toast IOS",
      message: "Toast IOS message",
      duration: 2000,
      mode: "ios",
      buttons: [
        {
          side: "start",
          icon: "star",
          text: "Favourite",
          handler: () => {
            window.alert("Favourite clicked")
          }
        },
        {
          text: "Cancel",
          role: "cancel",
          handler:() => {
            window.alert("Cancel Clicked")
          }
        }
      ]
    });
    await toast.present();
  }


}
