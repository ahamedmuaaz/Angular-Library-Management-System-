import { LibraryItem } from './LibraryItem.model';
import { DateTime } from './DateTime.model';

export class Dvd extends LibraryItem {
    private  producer: String;
    private  actors: Array<String> = new Array() ;
    private languages: Array<String> = new Array() ;
    private subtitles: Array<String> = new Array() ;

    constructor(ISBN: String, Title: String, Sector: String, publicationDate: DateTime, Producer: String, Actor: Array<String>,
        Language: Array<String>, Subtitle: Array<String>) {
        super(ISBN, Title, Sector, publicationDate);
        this.producer = Producer;
        this.actors = Actor;
        this.subtitles = Subtitle;
        this.languages = Language; }

        getProducer() { return this.producer; }
        getActor() { return this.actors ; }
        getLanguages() { return this.languages; }
        getSubtitles() {return this.subtitles; }


    }
