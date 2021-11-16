import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from '../app.component';
import { HelloPtiComponent } from '../hello-pti/hello-pti.component';
import { UserItemComponent } from '../user-item/user-item.component';
import { MhsComponent } from '../mhs/mhs.component';

@Component({
  selector: 'app-test-ngmodel',
  templateUrl: './test-ngmodel.component.html',
  styleUrls: ['./test-ngmodel.component.css']
})

export class TestNgmodelComponent implements OnInit {

  product: string;

  constructor() { 
    this.product = '';
  }

  ngOnInit(): void{
  }

}
