import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BussinesEditComponent } from './bussines-edit.component';

describe('BussinesEditComponent', () => {
  let component: BussinesEditComponent;
  let fixture: ComponentFixture<BussinesEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BussinesEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BussinesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
