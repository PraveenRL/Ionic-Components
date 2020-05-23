import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-item-sliding',
  templateUrl: './item-sliding.page.html',
  styleUrls: ['./item-sliding.page.scss'],
})
export class ItemSlidingPage implements OnInit {

  constructor(
  ) { }

  ngOnInit() {
  }

  public favorite(item) {

  }

  public share(item) {

  }

  public unread(item) {

  }

  public ionDragEvent(event) {
    console.log(event);
  }



}
