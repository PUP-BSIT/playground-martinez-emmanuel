import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { NotesComponent } from './home/notes/notes.component';
import { TodoComponent } from './home/todo/todo.component';
import { FoldersComponent } from './home/folders/folders.component';
import { CategoriesComponent } from './home/categories/categories.component';
import { SettingsComponent } from './home/settings/settings.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    NotesComponent,
    TodoComponent,
    FoldersComponent,
    CategoriesComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
