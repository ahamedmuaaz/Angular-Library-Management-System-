import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ServerService } from '../server.service';


@Component({
  selector: 'app-removeitem',
  templateUrl: './removeitem.component.html',
  styleUrls: ['./removeitem.component.css']
})
export class RemoveitemComponent implements OnInit {

  // delete form variable
  RemoveForm: FormGroup;
  Isbn;
  deletedbook = false;
  deleteddvd = false;
  foundedIsbn: String;
  showMessage;
  show = false;

  constructor(private server: ServerService) {

   }

  ngOnInit() {

    // initializing form
    this.RemoveForm = new FormGroup({
      'isbn': new FormControl(null, Validators.required)
    });
  }

    // method to send delete informations to server
    deleteitem() {
     this.show = false;
     const url = 'http://localhost:9000/delete/' + this.RemoveForm.get('isbn').value;

     this.server.deletedata(url).subscribe(
         (data) => {
          this.showMessage = data;
          this.show = true;
      },
      (error) => {
        this.showMessage = 'Sorry Server or Connection Problem Try Again!';
        this.show = true;
       }
       );


   }








}
