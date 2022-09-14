import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

const Base_URL= "http://localhost:8088/digitalbooks/createbook";
const Get_URL = "http://localhost:8089/reader/getbook/{category}/{price}/{authorName}";

@Injectable({
    providedIn: 'root'
  })

  export class BookService{

      createBook(book:{
      authorName:string;    
      bookName:string;
      category:string;
      logo:string;
      price:number;
      publisher :string;
      status:boolean;
      content:string;})
      {
     return this.http.post(Base_URL,book);
        
      }

getBook(book:any){
    return this.http.get(Get_URL);
 }
// getBook(){
//     return this.http.get(Get_URL);
// }

      constructor(public http: HttpClient){

      }
  }

