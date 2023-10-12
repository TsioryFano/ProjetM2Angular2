import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSesamienComponent } from './edit-sesamien.component';

describe('EditSesamienComponent', () => {
  let component: EditSesamienComponent;
  let fixture: ComponentFixture<EditSesamienComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditSesamienComponent]
    });
    fixture = TestBed.createComponent(EditSesamienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
