import { Component, OnInit } from '@angular/core';
import { ServerService } from '../server.service';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {

  constructor(private service: ServerService) { }
  view;
  delete;
  add;

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
