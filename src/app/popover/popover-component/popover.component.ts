import { Component, OnInit, Input } from '@angular/core';
import { NavParams, PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss'],
})
export class PopoverComponent implements OnInit {

  @Input() popoverData: string;

  constructor(
    private navParams: NavParams,
  ) { 
    console.log(this.navParams.get('popoverData'))
  }

  ngOnInit() {
    console.log(this.popoverData)
  }

}
