import { Component, OnInit } from '@angular/core';
import { BookDetailsService } from '../book-details.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-view-details',
  standalone: true,
  imports: [FormsModule,CommonModule,ReactiveFormsModule,HomeComponent,RouterModule],
  templateUrl: './view-details.component.html',
  styleUrl: './view-details.component.css'
})
export class ViewDetailsComponent implements OnInit{

  getData:any=""
  constructor(private service:BookDetailsService, private route:ActivatedRoute){}
  ngOnInit(): void {
    let bookReferenceId=this.route.snapshot.paramMap.get('id');
    console.log(bookReferenceId);
      this.service.getViewBook(bookReferenceId).subscribe(data=>{
        this.getData=data;
      })
  }

}
