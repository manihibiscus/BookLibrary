import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookDetailsService {

  constructor(private http:HttpClient) {

   }
   getBookDetails(){
    return this.http.get("http://localhost:3000/bookDetails")
   }
}
