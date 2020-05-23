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
- ionic cap add android
- ionic cap copy
- ionic cap sync
- ionic cap open android
- Connect device and build -> Build Bundles/APK => locate
- Location: android/app/build/outputs/apk/debug/myapp-debug.apk