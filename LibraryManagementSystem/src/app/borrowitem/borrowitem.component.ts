import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ServerService } from '../server.service';


@Component({
  selector: 'app-borrowitem',
  templateUrl: './borrowitem.component.html',
  styleUrls: ['./borrowitem.component.css']
})
export class BorrowitemComponent implements OnInit {
  // borrow form variable
   BorrowForm: FormGroup;
   isbn;
   id;
   ID = 5;
   message = null;
   show = false;

   // constructing server service in constructor
  constructor(private server: ServerService) {

   }

  ngOnInit() {

    // initialize borrow form
    this.BorrowForm = new FormGroup({
      'id': new FormControl(null, Validators.required),
      'isbn': new FormControl(null, Validators.required)
    });
  }

  // method to borrow item via sending information to server
  borrow() {
    const current = new Date();
    const day = current.getDate();
    const month = current.getMonth() + 1;
    const year = current.getFullYear();
    const hour = current.getHours();
    const min = current.getMinutes();
    const sec = current.getSeconds();
    const now = day + '/' + month + '/' + year + ' :' + hour + ':' + min + ':' + sec;
    const obj = {'isbn': this.BorrowForm.get('isbn').value, 'id': this.BorrowForm.get('id').value };

    // calling service to send data
    this.server.sendData(obj, 'http://localhost:9000/borrow').subscribe((data) => {
       if (data === 'done') {
          this.message = 'Sucessfully Borrowed At :' + now;


       } else if (data === 'exceeded') {
         this.message = `Item Borrowed , Time limit Exceeded`;

       } else if (data === 'noreader') {
         this.message = 'Reader Id Invalid';


       } else if (data === 'isbnerror') {
         this.message = 'ISBN Is Invalid';


       } else { this.message = 'Item Borrowed , Wil Be Available within ' + data + ' days'; }

         this.show = true;
     },
     (error) => {
      this.message = 'Sorry Server or Connection Problem Try Again!';
      this.show = true;
     }
     );

  }





}


