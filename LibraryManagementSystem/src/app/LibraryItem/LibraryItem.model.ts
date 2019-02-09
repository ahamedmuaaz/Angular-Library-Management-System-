import { Reader } from './Reader.model';
import { DateTime } from './DateTime.model';

export class LibraryItem {

    private isbn: String;
    private  title: String;
    private  sector: String;
    private  publicationDate: DateTime;
    private currentReader: Reader;
    private borrowedDate: DateTime;

        constructor(isbn: String , title: String , sector: String , publicationDate: DateTime ) {
            this.isbn = isbn;
            this.title = title;
            this.sector = sector;
            this.publicationDate = publicationDate;
        }

        public getTitle() {
            return this.title;
        }

        public setTitle( title: String) {
            this.title = title;
        }

        public getSector() {
            return this.sector;
        }

        public  setSector(sector: String) {
            this.sector = sector;
        }

        public getPublicationDate() {
            return this.publicationDate;
        }

        public setPublicationDate(publicationDate: DateTime ) {
            this.publicationDate = publicationDate;
        }

        public getCurrentReader() {
            return this.currentReader;
        }

        public  setCurrentReader(currentReader: Reader) {
            this.currentReader = currentReader;
        }
        public getIsbn() {
            return this.isbn;
        }
        public getborrowedDate() {
            return this.borrowedDate;
        }
        public setborrowedDate(Date: DateTime) {
          this.borrowedDate = Date;
        }
 }
