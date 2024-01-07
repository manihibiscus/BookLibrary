import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import {  FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { BookDetailsService } from '../book-details.service';
import { CommonModule } from '@angular/common';
import { AddBookComponent } from '../add-book/add-book.component';

@Component({
  selector: 'app-manage-book',
  standalone: true,
  imports: [HeaderComponent,ReactiveFormsModule,CommonModule,AddBookComponent],
  templateUrl: './manage-book.component.html',
  styleUrl: './manage-book.component.css'
})
export class ManageBookComponent {
  getBookDetails:any=""
  constructor(private service:BookDetailsService, private fb:FormBuilder){
    this.service.getBookDetails().subscribe(data=>{
      this.getBookDetails=data
    });
  }
  editForm=this.fb.group({
  updateBookName:["",Validators.required],
  updateAuthorName:["",Validators.required],
  updateLevel:["",Validators.required],
  updateBookCost:["",Validators.required],
  })


  delete(id:any){
    this.service.deleteDetails(id).subscribe(data=>{
      alert("Deleted Successfully");
    })
  }
  updatingData:any="";
  editFormHidden:boolean=false;
  edit(data: any, event: Event) {
    event.preventDefault();
    this.editFormHidden = true;
    this.updatingData = data;
    this.editForm.controls['updateBookName'].setValue(data.bookName)
    this.editForm.controls['updateAuthorName'].setValue(data.authorName)
    this.editForm.controls['updateLevel'].setValue(data.level)
    this.editForm.controls['updateBookCost'].setValue(data.bookCost)
  }
  update(){
    var body={
      bookName:this.editForm.value.updateBookName,
      authorName:this.editForm.value.updateAuthorName,
      level:this.editForm.value.updateLevel,
      bookCost:this.editForm.value.updateBookCost
    }
    this.service.editDetails(this.updatingData.id, body).subscribe(value=>{
      alert("Content Edited");
    })
  }


}
