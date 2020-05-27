import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabPage } from './tab.page';

const routes: Routes = [
  {
    path: '',
    component: TabPage,
    children: [
      {
        path: "tab1",
        children: [
          {
            path: "",
            loadChildren: () => import("../avatar-img-thumbnail/avatar-img-thumbnail.module").then(m => m.AvatarImgThumbnailPageModule)
          }
        ]
      },
      {
        path: "tab2",
        children: [
          {
            path: "",
            loadChildren: () => import("../badge/badge.module").then(m => m.BadgePageModule)
          }
        ]
      },
      {
        path: "",
        redirectTo: "/tab/tab1",
        pathMatch: "full"
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabPageRoutingModule { }
