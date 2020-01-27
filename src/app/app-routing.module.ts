import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CoursesComponent } from './components/courses/courses.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'courses/:id', component: CoursesComponent },
];
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
 
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
