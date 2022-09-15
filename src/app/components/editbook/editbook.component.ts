import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/book.service';
import Book from 'src/app/entity/Book';

@Component({
  selector: 'app-editbook',
  templateUrl: './editbook.component.html',
  styleUrls: ['./editbook.component.css']
})
export class EditbookComponent implements OnInit {
  
  book: Book = new Book();
  books: Book[]=[];
  id:Number =0;
  
  bookDetails = {
    authorName:"",
    bookName:"",
    category:"",
    logo:"",
    price:0,
    publisher :"",
    status:true,
    content:""

  }

  update(book){
    const observable = this.bookService.editBook(this.book,this.id);
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

  updateBook(bok,index){
    this.id = bok.id;
    this.book.authorName=bok.authorName;
    this.book.bookName=bok.bookName;
    this.book.category=bok.category;
    this.book.content=bok.content;
    this.book.price=bok.price;
    this.book.publisher=bok.publisher;
    this.book.status=bok.status;
    
    }

  constructor(public bookService:BookService) { }

  ngOnInit(): void {

    const promise = this.bookService.getBooks();
promise.subscribe(
  (response)=>{
    console.log(response);
    this.books = response as Book[];
  }
)

  }

}
