import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.page.html',
  styleUrls: ['./checkbox.page.scss'],
})
export class CheckboxPage implements OnInit {

  public checkBoxes: Array<Object> = [
    { label: "Pepperoni", isChecked: true },
    { label: "Sausage", isChecked: false },
    { label: "Mushroom", isChecked: false },
  ]

  constructor() { }

  ngOnInit() {
  }

  public onCheckBox() {
    console.log(this.checkBoxes);
  }

  public ionBlurEvent(event) {
    console.log(event);
  }

  public ionFocusEvent(event) {
    console.log(event);
  }

  public ionChangeEvent(event) {
    console.log(event);
  }

}
