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
    ReviewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
