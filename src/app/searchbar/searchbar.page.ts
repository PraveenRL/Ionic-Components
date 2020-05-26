import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.page.html',
  styleUrls: ['./searchbar.page.scss'],
})
export class SearchbarPage implements OnInit {

  /** Search from Json Data */

  public jsonData: Array<any> = [];

  constructor() {
    this.initializeJson();
    this.initializeArrayData();
  }

  ngOnInit() {
  }

  private initializeJson() {
    return this.jsonData = [
      {
        color: "red",
        value: "#f00"
      },
      {
        color: "green",
        value: "#0f0"
      },
      {
        color: "blue",
        value: "#00f"
      },
      {
        color: "cyan",
        value: "#0ff"
      },
      {
        color: "magenta",
        value: "#f0f"
      },
      {
        color: "yellow",
        value: "#ff0"
      },
      {
        color: "black",
        value: "#000"
      }
    ]
  }

  public filterJson(event: any) {
    this.initializeJson();
    let val = event.target.value;
    if (val && val.trim() != '') {
      this.jsonData = this.jsonData.filter((item) => {
        return (item.color.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  public selectValue(value) {
    window.alert(`you have selected ${value}`);
  }

  /********************** */

  /** Search From Array */

  public arrayData: Array<string> = [];

  private initializeArrayData() {
    return this.arrayData = ["Ram", "Gopi", "Dravid"];
  }

  public filterArray(event: any) {
    // Reset items back to all of the items
    this.initializeArrayData();

    let value = event.target.value;

    // if the value is an empty string don't filter the items
    if (value && value.trim() != '') {
      this.arrayData = this.arrayData.filter((item: string) => {
        return (item.toLowerCase().indexOf(value.toLowerCase()) > -1);
      })
    }

  }


}
