import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatebookComponent } from './components/createbook/createbook.component';
import { EditbookComponent } from './components/editbook/editbook.component';
import { SearchbooksComponent } from './components/searchbooks/searchbooks.component';
import { AuthorloginComponent } from './components/authorlogin/authorlogin.component';

const routes: Routes = [{path:'createbook',component:CreatebookComponent},
{path:'searchbook',component:SearchbooksComponent},
{path:'editbook',component:EditbookComponent},{path:'authersignin',component:AuthorloginComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
