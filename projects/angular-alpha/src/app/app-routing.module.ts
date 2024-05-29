import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { NotesComponent } from './home/notes/notes.component';
import { TodoComponent } from './home/todo/todo.component';
import { FoldersComponent } from './home/folders/folders.component';
import { CategoriesComponent } from './home/categories/categories.component';
import { SettingsComponent } from './home/settings/settings.component';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      { path: 'notes', component: NotesComponent },
      { path: 'todo', component: TodoComponent },
      { path: 'folders', component: FoldersComponent },
      { path: 'categories', component: CategoriesComponent },
      { path: 'settings', component: SettingsComponent },
      { path: '', redirectTo: 'notes', pathMatch: 'full' } // Default to notes
    ]
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
