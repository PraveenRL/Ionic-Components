import { Component, OnInit } from '@angular/core';

import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-ion-action-sheet',
  templateUrl: './ion-action-sheet.page.html',
  styleUrls: ['./ion-action-sheet.page.scss'],
})
export class IonActionSheetPage implements OnInit {

  constructor(
    public actionSheetController: ActionSheetController,
  ) { }

  ngOnInit() {
  }

  public async onClickActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: "Action Sheet Header",
      buttons: [{
        text: "Delete",
        role: "destructive",
        icon: "trash",
        handler: () => {
          console.log('Delete Clicked');
        }
      },
      {
        text: "Share",
        icon: "share",
        handler: () => {
          console.log('Share Clicked');
        }
      },
      {
        text: "Cancel",
        role: "cancel",
        icon: "close",
        handler: () => {
          console.log('Cancel Clicked');
        },
        cssClass: "bg-danger",
      }],
      /** 
       * Properties 
       * d -> Default
       * **/
      animated: true,         //d=true
      backdropDismiss: true,  //d=true
      cssClass: "action-sheet-custom", //In Global
      keyboardClose: true,
      mode: "md",
      subHeader: "Subheader",
    });
    await actionSheet.present();
  }


}
