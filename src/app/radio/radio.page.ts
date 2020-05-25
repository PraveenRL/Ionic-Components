import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-radio',
  templateUrl: './radio.page.html',
  styleUrls: ['./radio.page.scss'],
})
export class RadioPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public ionBlurEvent(event){
    console.log(event);
  }

  public ionChangeEvent(event){
    console.log(event);
  }

}
