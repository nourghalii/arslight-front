import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; // Importez HttpClientModule
import { FormsModule } from '@angular/forms'; // Importez FormsModule


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AuthParentComponent } from './components/auth-parent/auth-parent.component';
import { AuthOrthophonisteComponent } from './components/auth-orthophoniste/auth-orthophoniste.component';
import { AuthEnseignantComponent } from './components/auth-enseignant/auth-enseignant.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { CreateCourseComponent } from './components/create-course/create-course.component';
import { TestGame1Component } from './components/test-game1/test-game1.component';
import { TestGame2Component } from './components/test-game2/test-game2.component';
import { TestGame3Component } from './components/test-game3/test-game3.component';
import { NaturalWorldComponent } from './components/natural-world/natural-world.component';
import { TestGame4Component } from './components/test-game4/test-game4.component';
import { TestGame5Component } from './components/test-game5/test-game5.component';
import { TestGame6Component } from './components/test-game6/test-game6.component';
import { Parrot1Component } from './components/parrot1/parrot1.component';
import { Cats1Component } from './components/cats1/cats1.component';
import { Cats2Component } from './components/cats2/cats2.component';
import { Cats3Component } from './components/cats3/cats3.component';
import { Cats4Component } from './components/cats4/cats4.component';
import { ExerciceCharacterComponent } from './components/exercice-character/exercice-character.component';
import { QuestionComponent } from './components/quiz/question/question.component';
import { ResultComponent } from './components/quiz/result/result.component';
import { DyslexiaTestComponent } from './components/quiz/dyslexia-test/dyslexia-test.component';
import { SpeechToTextComponent } from './components/speech-to-text/speech-to-text.component';
import { SpeechToTextArComponent } from './components/speech-to-text-ar/speech-to-text-ar.component';
import { SchoolCoursesComponent } from './components/school-courses/school-courses.component';
import { Level1Component } from './components/level1/level1.component';
import { AssociationImagesComponent } from './components/association-images/association-images.component';
import { Level2Component } from './components/level2/level2.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AuthParentComponent,
    AuthOrthophonisteComponent,
    AuthEnseignantComponent,
    SignInComponent,
    CreateCourseComponent,
    TestGame1Component,
    TestGame2Component,
    TestGame3Component,
    NaturalWorldComponent,
    TestGame4Component,
    TestGame5Component,
    TestGame6Component,
    Parrot1Component,
    Cats1Component,
    Cats2Component,
    Cats3Component,
    Cats4Component,
    ExerciceCharacterComponent,
    QuestionComponent,
    ResultComponent,
    DyslexiaTestComponent,
    SpeechToTextComponent,
    SpeechToTextArComponent,
    SchoolCoursesComponent,
    Level1Component,
    AssociationImagesComponent,
    Level2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, // Ajoutez HttpClientModule aux imports
    FormsModule // Ajoutez FormsModule ici

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
