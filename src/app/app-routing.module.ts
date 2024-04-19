import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AuthParentComponent } from './components/auth-parent/auth-parent.component';
import { AuthOrthophonisteComponent } from './components/auth-orthophoniste/auth-orthophoniste.component';
import { AuthEnseignantComponent } from './components/auth-enseignant/auth-enseignant.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { HomeEnfantComponent } from './components/home-enfant/home-enfant.component';
import { GestionEnseignantComponent } from './components/gestion-enseignant/gestion-enseignant.component';
import { CoursesComponent } from './components/courses/courses.component';
import { ListStudentsComponent } from './components/list-students/list-students.component';
import { ReviewsComponent } from './components/reviews/reviews.component';
import { CreateCourseComponent } from './components/create-course/create-course.component';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'auth-parent',component:AuthParentComponent},
  {path:'auth-orthophoniste',component:AuthOrthophonisteComponent},
  {path:'auth-enseignant',component:AuthEnseignantComponent},
  {path:'sign-in',component:SignInComponent},
  {path: 'home-enfant', component:HomeEnfantComponent},
  {path:'gestion-enseignant', component:GestionEnseignantComponent},
  {path:'courses', component:CoursesComponent},
  {path:'list-students',component:ListStudentsComponent},
  {path:'reviews',component:ReviewsComponent},
  {path:'create-course',component:CreateCourseComponent}




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
