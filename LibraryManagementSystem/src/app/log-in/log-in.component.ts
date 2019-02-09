import { Component, OnInit, ElementRef } from '@angular/core';
import {Router} from '@angular/router';
import { ServerService } from '../server.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
   UserName: String;
   PassWord: String;
   message;
   login = true;
   access: String = 'h';

  constructor(private router: Router, private server: ServerService) { }



  ngOnInit() {
  }

  submit(form: NgForm ) {
    //  this.get();
    this.login = true;

   const url = 'http://localhost:9000';
   this.server.sendData(this.UserName + '.' + this.PassWord, url).subscribe
   ( ( Data: String) => {this.access = Data;
     if (this.access === 'ok' ) {
       this.router.navigate(['Menu']);
     } else {
       this.message = 'Password or Username incorrect';
       this.login = false;
     }

   } ,
      (error) => {
        this.message = 'Sorry Server or Connection Problem Try Again!';
        this.login = false;
       }
  );


  }




}
