import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddBookComponent } from './add-book/add-book.component';
import { ManageBookComponent } from './manage-book/manage-book.component';
import { ViewDetailsComponent } from './view-details/view-details.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path:"home",
    component:HomeComponent
  },
  {
    path:"addBook",
    component:AddBookComponent
  },
  {
    path:"manageBook",
    component:ManageBookComponent
  },
  {
    path:"View",
    component:ViewDetailsComponent
  }

];
