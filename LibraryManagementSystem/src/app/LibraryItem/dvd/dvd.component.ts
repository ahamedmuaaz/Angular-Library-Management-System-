import { Component, OnInit } from '@angular/core';
import { Dvd } from '../Dvd.model';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { DateTime } from '../DateTime.model';
import { ServerService } from 'src/app/server.service';


@Component({
  selector: 'app-dvd',
  templateUrl: './dvd.component.html',
  styleUrls: ['./dvd.component.css']
})
export class DvdComponent implements OnInit {
  static dvdarray: Dvd[] = new Array();
  Isbn;
  message = 'fill all fields';
  warning = true;
  name;
  sector;
  producer;
  actor;
  language;
  subtitle;
  publishedDate;


  constructor(private Server: ServerService) { }
  DvdForm: FormGroup;

  ngOnInit() {
    // initialize reactive form
    this.DvdForm = new FormGroup({
      'isbn': new FormControl(null, Validators.required),
      'title': new FormControl(null, Validators.required),
      'sector': new FormControl(null, Validators.required),
      'publisheddate': new FormControl(null, Validators.required),
      'producer': new FormControl(null, Validators.required),
      'languages': new FormArray([]),
      'actors': new FormArray([]),
      'subtitles': new FormArray([]),


    });

    // calling add field method to add a single field when loading
    this.onAdd(this.DvdForm.get('actors'));
    this.onAdd(this.DvdForm.get('languages'));
    this.onAdd(this.DvdForm.get('subtitles'));

  }

  // method to add a book
  onSubmit() {
    // getting values from reactive form
    this.Isbn = this.DvdForm.get('isbn').value;
    this.name = this.DvdForm.get('title').value;
    this.sector = this.DvdForm.get('sector').value;
    this.producer = this.DvdForm.get('producer').value;
    this.language = this.DvdForm.get('languages').value;
    this.actor = this.DvdForm.get('actors').value;
    this.subtitle = this.DvdForm.get('subtitles').value;
    this.publishedDate = this.DvdForm.get('publisheddate').value;

    const splittedDate = this.publishedDate.split('-');

    const publishedDate: DateTime = new DateTime( Number(splittedDate[2]) , Number(splittedDate[1]), Number(splittedDate[0]));

    // new dvd object
    const dvd: Dvd = new Dvd(this.Isbn, this.name, this.sector, publishedDate, this.producer, this.actor, this.language, this.subtitle);

    const url = 'http://localhost:9000/additem';

    // using service to send data through a post request
    this.Server.sendData(dvd, url).subscribe(
      (data: string) => {
        if (data === 'Notok') {
          this.message = 'ISBN Already Taken!';
          this.warning = false;

         } else {
          console.log(data);
          this.DvdForm.reset();
          this.message = data;
          this.warning = false;
        }
      },
      (error) => {
        this.message = 'Sorry Server or Connection Problem Try Again!';
        this.warning = false;
       }
    );


  }

  // method to add extra field to form
  onAdd(param) {
    const control = new FormControl(null, Validators.required);
  (<FormArray>param).push(control);
  }

  // method to remove added fields from forms
  onRemove(param) {
    if ( (<FormArray>param).length > 1) {
    const control = new FormControl(null, Validators.required);
  (<FormArray>param).removeAt((<FormArray>param).length - 1); }
  }




}
