import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reader',
  templateUrl: './reader.component.html',
  styleUrls: ['./reader.component.css']
})
export class ReaderComponent implements OnInit {
  view = false;
  add = false;
  delete = false;

  constructor() { }

  ngOnInit() {
  }

  viewclick() {
    this.view = true;
    this.add = false;
    this.delete = false;
  }
  addclick() {
    this.view = false;
    this.add = true;
    this.delete = false;
  }
  deleteclick() {
    this.view = false;
    this.add = false;
    this.delete = true;
  }
}
