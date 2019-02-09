import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ServerService } from 'src/app/server.service';

@Component({
  selector: 'app-deletereservation',
  templateUrl: './deletereservation.component.html',
  styleUrls: ['./deletereservation.component.css']
})
export class DeletereservationComponent implements OnInit {
deleteform: FormGroup;
message;
warning;
  constructor(private service: ServerService) { }

  ngOnInit() {
    this.deleteform = new FormGroup({
      'id' : new FormControl(null, Validators.required)
    });
  }

  ondelete() {
    const url = 'http://localhost:9000/deletereserv/' + this.deleteform.get('id').value;
    this.service.deletedata(url).subscribe((data) => {
      this.message = data;
      this.warning = true;

    });
  }

}
