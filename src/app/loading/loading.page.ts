import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.page.html',
  styleUrls: ['./loading.page.scss'],
})
export class LoadingPage implements OnInit {

  constructor(
    private loadingController: LoadingController
  ) { }

  ngOnInit() {
  }

  public async presentLoading() {
    const loading = await this.loadingController.create({
      message: "Please wait",
      duration: 2000,
      cssClass: "my-custom-class",
      backdropDismiss: true
    });
    await loading.present();
    const { role, data } = await loading.onDidDismiss();
    console.log('Loading Dismissed');
  }

  public async presentLoadingWithOptions() {
    const loading = await this.loadingController.create({
      cssClass: "gradient-blue",
      message: "Loading with options",
      duration: 5000,
      backdropDismiss: true,
      spinner: "bubbles",
      showBackdrop: false
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed with role:', role, data);
  }

  public async presentLoadingIos() {
    const loading = await this.loadingController.create({
      cssClass: "gradient-blue",
      message: "Ios design",
      duration: 5000,
      backdropDismiss: true,
      mode: "ios"
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed with role:', role, data);
  }

  public async presentLoadingDismiss() {
    const loading = await this.loadingController.create({
      message: "Dismiss before duration",
      duration: 10000,
    });
    await loading.present();

    setTimeout(() => {
      loading.dismiss();
      console.log('Dismissed after 1 seconds, but actual duration is 10 seconds');
    }, 1000);

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed with role:', role, data);
  }

}
