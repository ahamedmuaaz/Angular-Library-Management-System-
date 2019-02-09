import { Component, OnInit } from '@angular/core';
import { ServerService } from 'src/app/server.service';
import { Reader } from 'src/app/LibraryItem/Reader.model';

@Component({
  selector: 'app-viewreader',
  templateUrl: './viewreader.component.html',
  styleUrls: ['./viewreader.component.css']
})
export class ViewreaderComponent implements OnInit {

  ReaderArray = new Array();

  constructor(private server: ServerService) { }

  ngOnInit() {
    this.loadreadlist();
  }

 loadreadlist() {
   this.server.getData('http://localhost:9000/readerlist').subscribe(

     (data: any) => {

       for (let entry of data) {
        const r = new Reader(entry.name, entry.id, entry.mobileNumber, entry.email);
        this.ReaderArray.push(r);
       }
    });

 }


}
