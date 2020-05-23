import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.page.html',
  styleUrls: ['./button.page.scss'],
})
export class ButtonPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public ionBlurEvent(event) {
    console.log(event);
  }
  
  public ionFocusEvent(event) {
    console.log(event);
  }

}
