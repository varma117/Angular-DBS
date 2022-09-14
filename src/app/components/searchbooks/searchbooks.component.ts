import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/book.service';
import Book from 'src/app/entity/Book';


@Component({
  selector: 'app-searchbooks',
  templateUrl: './searchbooks.component.html',
  styleUrls: ['./searchbooks.component.css']
})
export class SearchbooksComponent implements OnInit {

book: Book = new Book();
books: Book[]=[];
booksDetails={
  authorName:"",  
  category:"",
  price:0
}
getBooks(booksDetails:any){
const observable = this.bookService.getBook(this.booksDetails);
observable.subscribe(
  (response :any)=>{
    console.log(response);
    this.books = response as Book[];
  },function(error){
    console.log(error);
    alert("something went wrong please check ")
  }
)

}

  constructor(public bookService:BookService) { }

  ngOnInit(): void {
const promise = this.bookService.getBook(this.booksDetails);
promise.subscribe(
  (response)=>{
    console.log(response);
    this.books = response as Book[];
  }
)

  }

}
