import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datetime',
  templateUrl: './datetime.page.html',
  styleUrls: ['./datetime.page.scss'],
})
export class DatetimePage implements OnInit {

  public customPickerOptions: any;

  public customDayShortNames: Array<string> = ['s\u00f8n', 'man', 'tir', 'ons', 'tor', 'fre', 'l\u00f8r'];

  public customYearValues: Array<number> = [2020, 2016, 2008, 2004, 2000, 1996];

  constructor() {
    this.customPickerOptions = {
      buttons: [
        {
          text: "Save",
          handler: () => {
            console.log('Save');
          }
        },
        {
          text: "Log",
          handler: () => {
            console.log('Log, Do not dismiss');
            return false;
          }
        }
      ]
    }
  }

  ngOnInit() {
  }

}
