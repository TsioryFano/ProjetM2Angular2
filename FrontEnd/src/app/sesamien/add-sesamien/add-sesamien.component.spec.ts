import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSesamienComponent } from './add-sesamien.component';

describe('AddSesamienComponent', () => {
  let component: AddSesamienComponent;
  let fixture: ComponentFixture<AddSesamienComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddSesamienComponent]
    });
    fixture = TestBed.createComponent(AddSesamienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
