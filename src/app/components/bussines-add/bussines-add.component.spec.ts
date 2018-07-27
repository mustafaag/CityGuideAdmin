import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BussinesAddComponent } from './bussines-add.component';

describe('BussinesAddComponent', () => {
  let component: BussinesAddComponent;
  let fixture: ComponentFixture<BussinesAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BussinesAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BussinesAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
