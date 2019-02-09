import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ServerService } from 'src/app/server.service';

@Component({
  selector: 'app-deletereader',
  templateUrl: './deletereader.component.html',
  styleUrls: ['./deletereader.component.css']
})
export class DeletereaderComponent implements OnInit {
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
    const uri = 'http://localhost:9000/deletereader/' + this.deleteform.get('id').value;
    this.service.deletedata(uri).subscribe((data) => {
      this.message = data;
      this.warning = true;
    } );
  }

}
