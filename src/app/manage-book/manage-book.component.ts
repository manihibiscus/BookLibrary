import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import {  ReactiveFormsModule } from '@angular/forms';
import { BookDetailsService } from '../book-details.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-manage-book',
  standalone: true,
  imports: [HeaderComponent,ReactiveFormsModule,CommonModule],
  templateUrl: './manage-book.component.html',
  styleUrl: './manage-book.component.css'
})
export class ManageBookComponent {
  getBookDetails:any=""
  constructor(private service:BookDetailsService){
    this.service.getBookDetails().subscribe(data=>{
      this.getBookDetails=data
    })
  }
  delete(id:any){
    this.service.deleteDetails(id).subscribe(data=>{
      alert("Deleted Successfully");
    })
  }

  edit(data:any){
    this.service.editDetails(data).subscribe(value=>{
      alert("Content Edited");
    })
  }

}
