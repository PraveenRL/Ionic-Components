import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.page.html',
  styleUrls: ['./content.page.scss'],
})
export class ContentPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public logScrollStart() {
    console.log('Scroll Start');
  }

  public logScrolling(event) {
    console.log(event);
  }

  public logScrollEnd() {
    console.log('Scroll End');
  }


}
