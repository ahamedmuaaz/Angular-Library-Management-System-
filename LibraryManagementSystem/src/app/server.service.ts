import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';




@Injectable({
  providedIn: 'root'
})
export class ServerService {

  constructor(private http: HttpClient) {
   }
   sendData(data, url: string) {
    return this.http.post(url, data);
  }
  getData(url: string) {
    return this.http.get(url);
  }
  deletedata(url: string) {
    return this.http.delete(url);
  }




}
