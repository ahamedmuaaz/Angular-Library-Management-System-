import { Component, OnInit } from '@angular/core';
import { ServerService } from '../server.service';
import { DvdComponent } from '../LibraryItem/dvd/dvd.component';
import { BookComponent } from '../LibraryItem/book/book.component';


@Component({
  selector: 'app-additem',
  templateUrl: './additem.component.html',
  styleUrls: ['./additem.component.css']
})
export class AdditemComponent implements OnInit {
  static isbn = 1;
  bookform = false;
  dvdform = false;
  book = 'Possible Books :' + (100 - Number(BookComponent.bookarray.length));
  dvd = 'Possible Dvds :' + (50 - DvdComponent.dvdarray.length);

  constructor(private server: ServerService) { }

  ngOnInit() {

  }

  bookonclick() {
    this.bookform = true;
    this.dvdform = false;
  }
  dvdonclick() {
    this.bookform = false;
    this.dvdform = true;
  }



}
