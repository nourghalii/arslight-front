import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AuthParentComponent,
    AuthOrthophonisteComponent,
    AuthEnseignantComponent,
    SignInComponent,
    HomeEnfantComponent,
    GestionEnseignantComponent,
    CoursesComponent,
    ListStudentsComponent,
    ReviewsComponent,
    CreateCourseComponent,
    TestGame1Component,
    TestGame2Component,
    TestGame3Component,
    NaturalWorldComponent,
    TestGame4Component,
    TestGame5Component,
    TestGame6Component,
    Parrot1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
