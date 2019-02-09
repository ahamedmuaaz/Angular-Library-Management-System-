import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ServerService } from 'src/app/server.service';

@Component({
  selector: 'app-addreservation',
  templateUrl: './addreservation.component.html',
  styleUrls: ['./addreservation.component.css']
})
export class AddreservationComponent implements OnInit {
  message;
  showmassage = false;
  ReserveForm: FormGroup;
  constructor(private service: ServerService) { }

  ngOnInit() {
    // initializing reactive form
    this.ReserveForm = new FormGroup({
      'id': new FormControl(null, Validators.required),
      'isbn': new FormControl(null, Validators.required)
    });
  }
  // sending reservation details
  reserve() {
    const obj = {'isbn': this.ReserveForm.get('isbn').value, 'id': this.ReserveForm.get('id').value };
    this.service.sendData(obj, 'http://localhost:9000/reserve').subscribe(
      (data) => {console.log(data);
      this.message = data;
      this.showmassage = true;
    },
    (error) => {
      this.message = 'Sorry Server or Connection Problem Try Again!';
      this.showmassage = true;
     }
      );
  }


}
