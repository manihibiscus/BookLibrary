import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { BookDetailsService } from '../book-details.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, FormsModule,CommonModule,],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  getBookDetails:any=""
  constructor(private service:BookDetailsService){
    this.service.getBookDetails().subscribe(data=>{
      this.getBookDetails=data
    })
  }
}
