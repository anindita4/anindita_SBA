// import { async, ComponentFixture, TestBed } from '@angular/core/testing';

// import { AddProjectComponent } from './add-project.component';

// describe('AddProjectComponent', () => {
//   let component: AddProjectComponent;
//   let fixture: ComponentFixture<AddProjectComponent>;

//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       declarations: [ AddProjectComponent ]
//     })
//     .compileComponents();
//   }));

//   beforeEach(() => {
//     fixture = TestBed.createComponent(AddProjectComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProjectComponent } from '../../UI/add-project/add-project.component';
import { Routes, RouterModule } from '@angular/router';
import { TaskService } from '../../SERVICES/task.service';
import { EventService } from '../../SERVICES/event.service';
import { ProjectService } from '../../SERVICES/project.service';
import { UserService } from '../../SERVICES/user.service';
import { ToastrModule } from 'ngx-toastr';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ModalModule, BsDatepickerModule } from 'ngx-bootstrap';
import { Ng5SliderModule } from 'ng5-slider';
import { FilteruserPipe } from '../../pipes/filteruser.pipe';

describe('ProjectComponent', () => {
  let component: AddProjectComponent;
  let fixture: ComponentFixture<AddProjectComponent>;

  beforeEach(async(() => {
    const routes: Routes = [
      { path: '', component: AddProjectComponent }
    ];
    TestBed.configureTestingModule({
      declarations: [ AddProjectComponent,FilteruserPipe ],
      providers: [TaskService, EventService,ProjectService,UserService
      ],
      imports: [FormsModule, ToastrModule.forRoot({
        timeOut: 3000,
        positionClass: 'toast-bottom-right',
        preventDuplicates: true
      }),
        HttpClientModule,
        ModalModule.forRoot(),
        RouterModule.forRoot(routes),
        Ng5SliderModule,
        BsDatepickerModule.forRoot()
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
