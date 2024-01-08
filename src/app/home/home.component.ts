import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { BookDetailsService } from '../book-details.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, FormsModule,CommonModule,RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  getBookDetails:any="";
  SearchFor:any=""
  constructor(private service:BookDetailsService){
    this.service.getBookDetails().subscribe(data=>{
      this.getBookDetails=data
    })
  }
  ngOnInit(): void {

  }
}
