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
import { TestGame1Component } from './components/test-game1/test-game1.component';
import { TestGame2Component } from './components/test-game2/test-game2.component';
import { TestGame3Component } from './components/test-game3/test-game3.component';
import { NaturalWorldComponent } from './components/natural-world/natural-world.component';
import { TestGame4Component } from './components/test-game4/test-game4.component';
import { TestGame5Component } from './components/test-game5/test-game5.component';
import { TestGame6Component } from './components/test-game6/test-game6.component';
import { Parrot1Component } from './components/parrot1/parrot1.component';


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
  {path:'create-course',component:CreateCourseComponent},
  {path:'test-game1', component:TestGame1Component},
  {path:'test-game2',component:TestGame2Component},
  {path:'test-game3', component:TestGame3Component},
  {path:'natural-world', component:NaturalWorldComponent},
  {path:'test-game4', component:TestGame4Component},
  {path:'test-game5', component:TestGame5Component},
  {path:'test-game6',component:TestGame6Component},
  {path:'parrot1',component:Parrot1Component}




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
