# Build Ionic
- ionic build --prod
- ionic capacitor add android
- ionic capacitor copy android  
- ionic capacitor open android  `Open the IDE for your native project (Xcode for iOS, Android Studio for Android)`
- ionic capacitor run android
- ionic capacitor sync android `Copy + Update`
- ionic capacitor update android


# Deploy
- npm install @ionic/pwa-elements
- 
```
Next, import @ionic/pwa-elements by editing src/main.ts.

import { defineCustomElements } from '@ionic/pwa-elements/loader';

// Call the element loader after the platform has been bootstrapped
defineCustomElements(window);
```
- ionic build --prod
- ionic cap add android     `Dont do if already folder exists`
- ionic cap copy
- ionic cap sync
- ionic cap open android
- Connect device and build -> Build Bundles/APK => locate
- Location: android/app/build/outputs/apk/debug/myapp-debug.apk

- Live reload `ionic capacitor run android -l --external`

# Exit App
```
import { Component, OnInit } from '@angular/core';
import { Platform, IonRouterOutlet } from '@ionic/angular';
import { Plugins } from '@capacitor/core';

const { App } = Plugins;

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(
    private platform: Platform,
    private routerOutlet: IonRouterOutlet
  ) {
    this.platform.backButton.subscribeWithPriority(-1, () => {
      if (!this.routerOutlet.canGoBack()) {
        if (window.confirm('Do you want to exit?')) {
          App.exitApp();
        }
      }
    })
  }

  ngOnInit() {
  }

}
```