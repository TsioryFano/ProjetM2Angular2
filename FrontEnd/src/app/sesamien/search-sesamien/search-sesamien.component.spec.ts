import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchSesamienComponent } from './search-sesamien.component';

describe('SearchSesamienComponent', () => {
  let component: SearchSesamienComponent;
  let fixture: ComponentFixture<SearchSesamienComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchSesamienComponent]
    });
    fixture = TestBed.createComponent(SearchSesamienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
