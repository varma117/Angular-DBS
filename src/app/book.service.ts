import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

const Base_URL= "http://localhost:8088/digitalbooks/createbook";
const Get_URL = "http://localhost:8089/reader/getbook/";
const Get_URL1 = "http://localhost:8089/reader/getallbooks";
const Get_URL2 = "http://localhost:8088/digitalbooks/getallbooks";
const put_url = "http://localhost:8088/digitalbooks/editbook/";

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

getBook(book:{
    authorName:string;    
    price:number;
    category:string;})
    {
    return this.http.get(Get_URL+book.category+"/"+book.price+"/"+book.authorName);
 }
getBooks(){
    return this.http.get(Get_URL2);
}
editBook(book,id){
return this.http.put(put_url+id,book);
}

      constructor(public http: HttpClient){

      }
  }

