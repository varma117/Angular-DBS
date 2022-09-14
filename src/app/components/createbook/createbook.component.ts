import { Component, OnInit } from '@angular/core';
import Book from 'src/app/entity/Book';
import{BookService} from 'src/app/book.service';

@Component({
  selector: 'app-createbook',
  templateUrl: './createbook.component.html',
  styleUrls: ['./createbook.component.css']
})
export class CreatebookComponent implements OnInit {
  book: Book = new Book();
  books: Book [] = [];

  save(){
    const observable = this.bookService.createBook(this.bookDetails)
    observable.subscribe(
      (response: any)=>{
        console.log(response);
       
      },
      function(error){
        console.log(error);
        alert("something went wrong please check ")
      }
    ) 
    
  }

  bookDetails = {
    authorName:"",
    bookName:"",
    category:"",
    logo:"",
    price:0,
    publisher :"",
    publishedDate:Date,
    status:true,
    content:""

  }

  constructor(public bookService:BookService) { }

  ngOnInit(): void {
  }

}
