import { Component, OnInit } from '@angular/core';
import { Book } from '../Book.model';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { ServerService } from 'src/app/server.service';
import { DateTime } from '../DateTime.model';
import { Dvd } from '../Dvd.model';
import { DvdComponent } from '../dvd/dvd.component';
import { Reader } from '../Reader.model';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})

export class BookComponent implements OnInit {
  // static array to save all books
  static bookarray: Book[] = new Array() ;
  Isbn;
  name;
  author = new Array();
  publisher;
  pages: number;
  sector;
  warning = true;
  message = '';
  publishdate: String;
  received;

  constructor(private server: ServerService) { }

  // bookform variable
  BookForm: FormGroup;

  ngOnInit() {
    // initialize reactive form
    this.BookForm = new FormGroup({
      'isbn': new FormControl(null, Validators.required),
      'title': new FormControl(null, Validators.required),
      'sector': new FormControl(null, Validators.required),
      'authors': new FormArray([]),
      'publisher': new FormControl(null, Validators.required),
      'publisherdate': new FormControl(null, Validators.required),
      'pages': new FormControl(null, Validators.required)
    });

    // calling add field method to add a single field at loading
   this.onAuthorAdd();
  }

  // method to add a Book
  submit() {

    // getting the values from reactive form to variables
    this.Isbn = this.BookForm.get('isbn').value;
    this.name = this.BookForm.get('title').value;
    this.sector = this.BookForm.get('sector').value;
    this.publisher = this.BookForm.get('publisher').value;
    this.pages = this.BookForm.get('pages').value;
    this.author = this.BookForm.get('authors').value;
    this.publishdate = this.BookForm.get('publisherdate').value;

   const splittedDate = this.publishdate.split('-');

   // date object for published date
   const publishedDate: DateTime = new DateTime( Number(splittedDate[2]) , Number(splittedDate[1]), Number(splittedDate[0]));

   // creating a new book object
   const bk: Book = new Book( this.Isbn, this.name, this.sector, publishedDate, this.author, this.publisher, this.pages);
   const url1 = 'http://localhost:9000/additem';
   this.server.sendData(bk, url1).subscribe(
     (data: string) => {
     if (data === 'Notok') {
      this.message = 'ISBN Already Taken!';
      this.warning = false;
      } else {

        this.BookForm.reset();
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

  // method to add a new field
  onAuthorAdd() {
    const control = new FormControl(null, Validators.required);
  (<FormArray>this.BookForm.get('authors')).push(control);
  }

  // method to remove added fields
  onAuthorRemove() {
    if ( (<FormArray>this.BookForm.get('authors')).length > 1) {
    const control = new FormControl(null, Validators.required);
  (<FormArray>this.BookForm.get('authors')).removeAt((<FormArray>this.BookForm.get('authors')).length - 1); }
  }

 // method to get all library items from database
  caldata() {
    BookComponent.bookarray = new Array();
    DvdComponent.dvdarray = new Array();
    const url = 'http://localhost:9000/';
    this.server.getData(url).subscribe(
     (data: any[]) => {
        for (const entry of data) {
          let reader: Reader;
          let borrowdate: DateTime;

          if (entry.currentReader != null) {

             reader = new Reader( entry.currentReader.name, entry.currentReader.id, entry.currentReader.mobileNumber,
               entry.currentReader.email);
          }
          if (entry.borrowedDate != null) {
            borrowdate = new DateTime( entry.borrowedDate.day, entry.borrowedDate.month, entry.borrowedDate.year);
            borrowdate.setHour(entry.borrowedDate.hour);
            borrowdate.setMinute(entry.borrowedDate.minute);
            borrowdate.setSecond(entry.borrowedDate.second);
          }

          const date = new DateTime( entry.publicationDate.day, entry.publicationDate.month, entry.publicationDate.year);
          date.setHour(entry.publicationDate.hour);
          date.setMinute(entry.publicationDate.minute);
          date.setSecond(entry.publicationDate.second);

          if (entry.authors != null) {

            const bk: Book = new Book(entry.isbn, entry.title,
            entry.sector, date, entry.authors, entry.publisher, entry.numberOfPages);
            bk.setCurrentReader(reader);
            bk.setborrowedDate(borrowdate);
            BookComponent.bookarray.push(bk);
          } else {

            const dv = new Dvd(entry.isbn, entry.title, entry.sector, date, entry.producer, entry.actors, entry.languages, entry.subtitles);
            dv.setCurrentReader(reader);
            dv.setborrowedDate(borrowdate);
            DvdComponent.dvdarray.push(dv);
          }
      }}
   );
  }


}
