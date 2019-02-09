import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LogInComponent } from './log-in/log-in.component';
import { MenuComponent } from './menu/menu.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AdditemComponent } from './additem/additem.component';
import { BookComponent } from './LibraryItem/book/book.component';
import { DvdComponent } from './LibraryItem/dvd/dvd.component';
import { RemoveitemComponent } from './removeitem/removeitem.component';
import { DisplayitemComponent } from './displayitem/displayitem.component';
import { BorrowitemComponent } from './borrowitem/borrowitem.component';
import { ReturnitemComponent } from './returnitem/returnitem.component';
import { GeneratereportComponent } from './generatereport/generatereport.component';
import { ReaderComponent } from './reader/reader.component';
import { AddreaderComponent } from './reader/addreader/addreader.component';
import { ViewreaderComponent } from './reader/viewreader/viewreader.component';
import { DeletereaderComponent } from './reader/deletereader/deletereader.component';
import { FooterComponent } from './footer/footer.component';
import { ReservationComponent } from './reservation/reservation.component';
import { AddreservationComponent } from './reservation/addreservation/addreservation.component';
import { ViewreservationsComponent } from './reservation/viewreservations/viewreservations.component';
import { DeletereservationComponent } from './reservation/deletereservation/deletereservation.component';


const approutes: Routes = [
  {path: '', component : LogInComponent},
  {path: 'Menu', component: MenuComponent},
  {path: 'Additem', component: AdditemComponent},
  {path: 'Removeitem', component: RemoveitemComponent},
  {path: 'Displayitem', component: DisplayitemComponent},
  {path: 'Borrowitem', component: BorrowitemComponent},
  {path: 'Returnitem', component: ReturnitemComponent},
  {path: 'Generatereport', component: GeneratereportComponent},
  {path: 'AddReader', component: ReaderComponent},
  {path: 'Reservation', component: ReservationComponent},
  {path: 'AddReservation', component: AddreservationComponent},
  {path: 'ViewReservation', component: ViewreservationsComponent},
  {path: 'DeleteReservation', component: DeletereservationComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    MenuComponent,
    NavbarComponent,
    AdditemComponent,
    BookComponent,
    DvdComponent,
    RemoveitemComponent,
    DisplayitemComponent,
    BorrowitemComponent,
    ReturnitemComponent,
    GeneratereportComponent,
    ReaderComponent,
    AddreaderComponent,
    ViewreaderComponent,
    DeletereaderComponent,
    FooterComponent,
    ReservationComponent,
    AddreservationComponent,
    ViewreservationsComponent,
    DeletereservationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(approutes),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
