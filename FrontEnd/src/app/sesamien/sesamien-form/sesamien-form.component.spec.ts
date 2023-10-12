import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SesamienFormComponent } from './sesamien-form.component';

describe('SesamienFormComponent', () => {
  let component: SesamienFormComponent;
  let fixture: ComponentFixture<SesamienFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SesamienFormComponent]
    });
    fixture = TestBed.createComponent(SesamienFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
