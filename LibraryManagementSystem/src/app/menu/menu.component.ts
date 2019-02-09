import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  add() {
    this.router.navigate(['Additem']);
  }
  delete() {
    this.router.navigate(['Removeitem']);
  }
  display() {
    this.router.navigate(['Displayitem']);
  }
  borrow() {
    this.router.navigate(['Borrowitem']);
  }

  return() {
      this.router.navigate(['Returnitem']);
  }

  reader() {
    this.router.navigate(['AddReader']);
  }
  report() {
    this.router.navigate(['Generatereport']);
  }
  logout() {
    this.router.navigate(['']);
  }
  reserve() {
    this.router.navigate(['Reservation']);
  }


}
