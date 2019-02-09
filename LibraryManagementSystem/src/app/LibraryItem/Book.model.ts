import { LibraryItem } from './LibraryItem.model';
import { DateTime } from './DateTime.model';

export class Book extends LibraryItem {

    private authors: Array<String> = new Array() ;
    private  publisher: String;
    private numberOfPages: number;

    constructor ( isbn: String, title: String, sector: String, publicationDate: DateTime , authors: Array<String>,
        publisher: String, numberOfPages: number) {
        super(isbn, title, sector, publicationDate);
        this.authors = authors;
        this.publisher = publisher;
        this.numberOfPages = numberOfPages;
    }



    public getAuthors() {
        return this.authors;
    }

    public  setAuthors(authors: Array<String>) {
        this.authors = authors;
    }

    public getPublisher() {
        return this.publisher;
    }

    public setPublisher(publisher: String ) {
        this.publisher = publisher;
    }

    public  getNumberOfPages() {
        return this.numberOfPages;
    }

    public setNumberOfPages(numberOfPages: number) {
        this.numberOfPages = numberOfPages;
    }

}
