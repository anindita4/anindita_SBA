// import { NgModule } from '@angular/core';
// import { Routes, RouterModule } from '@angular/router';


// const routes: Routes = [];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AddUserComponent } from '../app/UI/add-user/add-user.component';
import { AddTaskComponent } from './UI/add-task/add-task.component';
import { AddProjectComponent } from './UI/add-project/add-project.component';
import { ViewTaskComponent } from './UI/view-task/view-task.component';

import { PageNotFoundComponent } from '../app/UI/page-not-found/page-not-found.component';


const routes: Routes = [
{
  path: '',
  redirectTo: 'app-component',
  pathMatch: 'full'
},
{ path: 'app-component', component: AppComponent },
{ path: 'add-user', component: AddUserComponent },
{ path: 'add-task', component: AddTaskComponent},
{ path: 'add-project', component: AddProjectComponent},
{ path: 'view-task', component: ViewTaskComponent},
{ path: '**', component: PageNotFoundComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

// export const routingComponents = [AddUserComponent,
// AddTaskComponent,
// AddProjectComponent,
// ViewTaskComponent,
// PageNotFoundComponent
// ]
