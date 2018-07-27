import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BussinesDetailsComponent } from './bussines-details.component';

describe('BussinesDetailsComponent', () => {
  let component: BussinesDetailsComponent;
  let fixture: ComponentFixture<BussinesDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BussinesDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BussinesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
