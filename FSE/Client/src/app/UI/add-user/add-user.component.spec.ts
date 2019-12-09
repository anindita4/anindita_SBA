// import { async, ComponentFixture, TestBed } from '@angular/core/testing';

// import { AddUserComponent } from './add-user.component';

// describe('AddUserComponent', () => {
//   let component: AddUserComponent;
//   let fixture: ComponentFixture<AddUserComponent>;

//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       declarations: [ AddUserComponent ]
//     })
//     .compileComponents();
//   }));

//   beforeEach(() => {
//     fixture = TestBed.createComponent(AddUserComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });


import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUserComponent } from '../add-user/add-user.component';
import { UserService } from '../../SERVICES/user.service';
import { EventService } from '../../SERVICES/event.service';
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';
import { ModalModule } from 'ngx-bootstrap';
import { RouterModule, Routes } from '@angular/router';
import { FilteruserPipe } from '../../pipes/filteruser.pipe';

describe('AddUserComponent', () => {
  let component: AddUserComponent;
  let fixture: ComponentFixture<AddUserComponent>;

  beforeEach(async(() => {
    const routes: Routes = [
      { path: '', component: AddUserComponent }
    ];
    TestBed.configureTestingModule({
      declarations: [ AddUserComponent,FilteruserPipe ],
      providers: [UserService, EventService],
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
    fixture = TestBed.createComponent(AddUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
