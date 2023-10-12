import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailSesamienComponent } from './detail-sesamien.component';

describe('DetailSesamienComponent', () => {
  let component: DetailSesamienComponent;
  let fixture: ComponentFixture<DetailSesamienComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailSesamienComponent]
    });
    fixture = TestBed.createComponent(DetailSesamienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
