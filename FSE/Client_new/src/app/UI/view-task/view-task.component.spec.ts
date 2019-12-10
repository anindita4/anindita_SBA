// import { async, ComponentFixture, TestBed } from '@angular/core/testing';

// import { ViewTaskComponent } from './view-task.component';

// describe('ViewTaskComponent', () => {
//   let component: ViewTaskComponent;
//   let fixture: ComponentFixture<ViewTaskComponent>;

//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       declarations: [ ViewTaskComponent ]
//     })
//     .compileComponents();
//   }));

//   beforeEach(() => {
//     fixture = TestBed.createComponent(ViewTaskComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTaskComponent } from './view-task.component';
import { EventService } from '../../SERVICES/event.service';

import { ProjectService } from '../../SERVICES/project.service';
import { TaskService } from '../../SERVICES/task.service';
import { FormsModule } from '@angular/forms';
import { FilteruserPipe } from '../../pipes/filteruser.pipe';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';
import { ModalModule } from 'ngx-bootstrap';
import { RouterModule, Routes } from '@angular/router';

describe('ViewTaskComponent', () => {
  let component: ViewTaskComponent;
  let fixture: ComponentFixture<ViewTaskComponent>;

  beforeEach(async(() => {
    const routes: Routes = [
      { path: '', component: ViewTaskComponent }
    ];
    TestBed.configureTestingModule({
      declarations: [ViewTaskComponent, FilteruserPipe],
      providers: [ProjectService, TaskService, EventService],
      imports: [FormsModule, ToastrModule.forRoot({
        timeOut: 3000,
        positionClass: 'toast-bottom-right',
        preventDuplicates: true
      }),
        HttpClientModule,
        ModalModule.forRoot(),
        RouterModule.forRoot(routes)]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
