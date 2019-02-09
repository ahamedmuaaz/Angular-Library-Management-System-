import { Component, OnInit } from '@angular/core';
import { BookComponent } from '../LibraryItem/book/book.component';
import { Book } from '../LibraryItem/Book.model';
import { Dvd } from '../LibraryItem/Dvd.model';
import { DvdComponent } from '../LibraryItem/dvd/dvd.component';
import { ServerService } from '../server.service';

@Component({
  selector: 'app-displayitem',
  templateUrl: './displayitem.component.html',
  styleUrls: ['./displayitem.component.css']
})
export class DisplayitemComponent implements OnInit {
  bookarray: Book[];
  dvdarray: Dvd[];
  search = '';

  constructor(private server: ServerService) {

    // calling call data method from book component to get all books and dvds
    const c = new BookComponent(this.server);
    c.caldata();
  }

  ngOnInit() {
  // initializing two array to view all items
  this.bookarray = BookComponent.bookarray;
  this.dvdarray =  DvdComponent.dvdarray;

  }


  }


