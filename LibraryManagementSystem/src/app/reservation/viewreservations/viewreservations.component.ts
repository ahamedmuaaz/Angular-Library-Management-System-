import { Component, OnInit } from '@angular/core';
import { ServerService } from 'src/app/server.service';

@Component({
  selector: 'app-viewreservations',
  templateUrl: './viewreservations.component.html',
  styleUrls: ['./viewreservations.component.css']
})
export class ViewreservationsComponent implements OnInit {
   reservArray = new Array();
  constructor(private service: ServerService) { }

  ngOnInit() {
    this.receive();
  }

  receive() {
    this.service.getData('http://localhost:9000/displayreservation').subscribe((data: any) => {
    console.log(data);
    this.reservArray = data; }
    );
  }
}
