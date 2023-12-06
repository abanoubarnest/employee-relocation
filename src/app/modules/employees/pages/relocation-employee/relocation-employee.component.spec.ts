import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelocationEmployeeComponent } from './relocation-employee.component';

describe('RelocationEmployeeComponent', () => {
  let component: RelocationEmployeeComponent;
  let fixture: ComponentFixture<RelocationEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RelocationEmployeeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RelocationEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
