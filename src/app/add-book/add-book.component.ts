import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { BookDetailsService } from '../book-details.service';

@Component({
  selector: 'app-add-book',
  standalone: true,
  imports: [HeaderComponent,ReactiveFormsModule],
  templateUrl: './add-book.component.html',
  styleUrl: './add-book.component.css'
})
export class AddBookComponent {
constructor(private fb:FormBuilder, private service:BookDetailsService){}
addBookForm=this.fb.group({
  bookName:["",Validators.required],
  authorName:["",Validators.required],
  level:["",Validators.required],
  bookCost:["₹",Validators.required],
});
getDetails:any=""
submitForm(){
  this.service.getBookDetails().subscribe(value=>{
    this.getDetails=value;
  })
  var body={
    id:this.getDetails.length+1,
    bookName:this.addBookForm.value.bookName,
    authorName:this.addBookForm.value.authorName,
    level:this.addBookForm.value.level,
    bookCost:this.addBookForm.value.bookCost
  }
  if(this.addBookForm.valid){
  this.service.postBookDetails(body).subscribe(data=>{
    alert("Added Successfully!");
  });
  }
  else{
    alert("Enter all the fields");
  }
}
}
