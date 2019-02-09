import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Reader } from 'src/app/LibraryItem/Reader.model';
import { ServerService } from 'src/app/server.service';


@Component({
  selector: 'app-addreader',
  templateUrl: './addreader.component.html',
  styleUrls: ['./addreader.component.css']
})
export class AddreaderComponent implements OnInit {
  AddForm: FormGroup;
  id;
  name;
  email;
  mobile;
  warning = false;
  message;

  constructor(private server: ServerService) { }

  ngOnInit() {
    this.AddForm = new FormGroup({
      'name': new FormControl(null, Validators.required),
      'email': new FormControl(null, Validators.required),
      'mobile': new FormControl(null, [Validators.required, Validators.minLength(10)])
    });
  }

  addreader() {
    this.name = this.AddForm.get('name').value;
    this.email = this.AddForm.get('email').value;
    this.mobile = this.AddForm.get('mobile').value;

    const r = new Reader(this.name, null, this.mobile, this.email);

    const url1 = 'http://localhost:9000/addreader';

    this.server.sendData(r, url1).subscribe(
      (data) => {
       this.message = data;
       this.warning = true;
      },
      (error) => {
        this.message = 'Sorry Server or Connection Problem Try Again!';
        this.warning = true;
       }

      );

    }




}
