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
   postBookDetails(body:any)
   {
    return this.http.post("http://localhost:3000/bookDetails", body);
   }
   deleteDetails(id:any)
   {
    return this.http.delete("http://localhost:3000/bookDetails/"+id);
   }
   editDetails(id:any, data:any){
    return this.http.patch("http://localhost:3000/bookDetails/"+id,data)
   }
   getViewBook(id:any){
    return this.http.get("http://localhost:3000/bookDetails/"+id);
   }
}
