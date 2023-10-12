import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSesamienComponent } from './list-sesamien.component';

describe('ListSesamienComponent', () => {
  let component: ListSesamienComponent;
  let fixture: ComponentFixture<ListSesamienComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListSesamienComponent]
    });
    fixture = TestBed.createComponent(ListSesamienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
