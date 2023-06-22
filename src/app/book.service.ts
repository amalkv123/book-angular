import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http:HttpClient) { }

  getbook(){
    return this.http.get<any>('https://fakerestapi.azurewebsites.net/api/v1/Books ')
  }
  // deletebook(key: any){
  //   return this.http.delete('https://fakerestapi.azurewebsites.net/api/v1/Books/{pass-key} ')
  // }


  deletebook(key: any) {
    const url = `https://fakerestapi.azurewebsites.net/api/v1/Books/`+key;
    return this.http.delete<Response>(url);
   
  }
}
