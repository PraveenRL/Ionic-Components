import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-avatar-img-thumbnail',
  templateUrl: './avatar-img-thumbnail.page.html',
  styleUrls: ['./avatar-img-thumbnail.page.scss'],
})
export class AvatarImgThumbnailPage implements OnInit {

  public imageItems: Array<Object> = [
    {
      src: "https://html5hive.org/wp-content/uploads/2014/06/js_800x800.jpg",
      text: "JavaScript"
    },
    {
      src: "https://pbs.twimg.com/profile_images/1149708719178993664/3Hb8W4aX.png",
      text: "TypeScript"
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png",
      text: "Angular"
    },
    {
      src: "https://cdn.auth0.com/blog/get-started-ionic/logo.png",
      text: "Ionic"
    },
    {
      src: "https://sdtimes.com/wp-content/uploads/2019/03/jW4dnFtA_400x400.jpg",
      text: "Java"
    },
  ]

  constructor() { }

  ngOnInit() {
  }

}
