
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { Routes, RouterModule } from "@angular/router";
import { BsDatepickerModule, ModalModule } from 'ngx-bootstrap';
import { Ng5SliderModule } from 'ng5-slider';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { UserService } from './services/user.service';

//import { Response } from '@angular/http';

import { ToastrModule } from 'ngx-toastr';
import { EventService } from './services/event.service';
import { BaseService } from './services/base.service';
import { FilteruserPipe } from './pipes/filteruser.pipe';

import { ProjectService } from './services/project.service';
import { TaskService } from './services/task.service';


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
  declarations: [
    AppComponent,
    FilteruserPipe,
    AddUserComponent,
    AddTaskComponent,
    AddProjectComponent,
    ViewTaskComponent,
    PageNotFoundComponent
    // routingComponents
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot(),
    ModalModule.forRoot(),
    RouterModule.forRoot(routes, { useHash: true }),
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true
    }),
    Ng5SliderModule
    //,Response
  ],
  providers: [BaseService,UserService, EventService, ProjectService,TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
