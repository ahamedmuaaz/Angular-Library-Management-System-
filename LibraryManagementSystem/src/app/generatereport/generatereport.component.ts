import { Component, OnInit, ElementRef } from '@angular/core';
import { ServerService } from '../server.service';


@Component({
  selector: 'app-generatereport',
  templateUrl: './generatereport.component.html',
  styleUrls: ['./generatereport.component.css']
})



export class GeneratereportComponent implements OnInit {
 reportarray: any[] = new Array();

  constructor(private server: ServerService) { }
  url = 'http://localhost:9000/generate';

  ngOnInit() {

  }

  // method to get report information from server
  getposts() {
     this.server.getData(this.url).subscribe(
       (data: any) => {
         this.reportarray = new Array();
         for (let item of data) {
           console.log(item.isbn);
           this.reportarray.push(item);
         }
         console.log(data);
      }
    );

  }

}














