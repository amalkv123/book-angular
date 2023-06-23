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

  

  addbook(data: any){
    const url = "https://fakerestapi.azurewebsites.net/api/v1/Books"
    return this.http.post<any>(url, data)
  }

  deletebook(key: any) {
    const url = `https://fakerestapi.azurewebsites.net/api/v1/Books/`+key;
    return this.http.delete<Response>(url);
   
  }

  getbooks(key:any){
    const url = `https://fakerestapi.azurewebsites.net/api/v1/Books/`+key;
    return this.http.get<any>(url);

  }
  updatebook(data: any,key:any){
    console.log("api")
    const url = 'https://fakerestapi.azurewebsites.net/api/v1/Books/'+key;
    return this.http.put<any>(url,data)

  }


  }


