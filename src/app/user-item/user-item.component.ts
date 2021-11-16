import { Component, OnInit } from '@angular/core';
//import { Tracing } from 'trace_events';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.css']
})

export class UserItemComponent implements OnInit {
  name : string;
  nim : string;

  constructor() {
    this.name = 'Richie Darmawan Oey';
    this.nim = '00000043733';
   }

  ngOnInit(): void {
  }

}
