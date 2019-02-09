import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ServerService } from '../server.service';

@Component({
  selector: 'app-returnitem',
  templateUrl: './returnitem.component.html',
  styleUrls: ['./returnitem.component.css']
})
export class ReturnitemComponent implements OnInit {
  ReturnForm: FormGroup;
  isbn;
  message;
  show = false;
  constructor(private server: ServerService) {
    this.ReturnForm = new FormGroup({
      'isbn': new FormControl(null, Validators.required)
    });
   }

  ngOnInit() {
  }

// return method
return() {
  const uri = 'http://localhost:9000/return/' + this.ReturnForm.get('isbn').value;
  this.server.getData(uri).subscribe((data) => {
   if (data === 'isbnerror') {
    this.message = 'ISBN Invalid';
    this.show = true;
   } else if (data === 'notborrowed') {
    this.message = 'Item Not Borrowed';
    this.show = true;
   } else {
    this.message = 'Fine Amount:' + data;
    this.show = true;
    this.ReturnForm.reset();
   }
  },
  (error) => {
    this.message = 'Sorry Server or Connection Problem Try Again!';
    this.show = true;
   }
  );

}
}


