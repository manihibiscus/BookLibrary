import { Component, OnInit } from '@angular/core';
import { BookDetailsService } from '../book-details.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-view-details',
  standalone: true,
  imports: [FormsModule,CommonModule,ReactiveFormsModule],
  templateUrl: './view-details.component.html',
  styleUrl: './view-details.component.css'
})
export class ViewDetailsComponent implements OnInit{

  getData:any=""
  constructor(private service:BookDetailsService){}
  ngOnInit(): void {
      this.service.getBookDetails().subscribe(data=>{
        this.getData=data;
      });
  }

}
