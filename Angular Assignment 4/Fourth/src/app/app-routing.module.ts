import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { OsComponent } from './os/os.component';
import { ProgrammingLanguageComponent } from './programming-language/programming-language.component';
import { DbComponent } from './db/db.component';

const routes: Routes = [
  {path: ' ', component: AppComponent},
  {path: 'os', component: OsComponent},
  {path: 'programming', component: ProgrammingLanguageComponent},
  {path: 'db', component: DbComponent}
];

@NgModule({
  exports: [
    RouterModule
  ],
  imports: [
    RouterModule.forRoot(routes)
  ]
})

export class AppRoutingModule { }
