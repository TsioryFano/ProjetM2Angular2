import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetailSesamienComponent } from './detail-sesamien.component';
import { SesamienService } from '../sesamien.service';
import { ActivatedRoute, Router } from '@angular/router';
import { of } from 'rxjs';
import { Sesamien, Mention, Genre, RegionOrigine, Etat } from '../sesamien';
import { MatCardModule } from '@angular/material/card';



describe('DetailSesamienComponent', () => {
  let component: DetailSesamienComponent;
  let fixture: ComponentFixture<DetailSesamienComponent>;

  const testSesamien: Sesamien = {
    id: '1',
    nom: 'John',
    prenoms: 'Doe',
    prenomUsuel: 'Johny',
    mention: Mention.S,
    age: 20,
    promotion: 25,
    image: 'path/to/image.jpg',
    regionOrigine: RegionOrigine.AtsimoAndrefana,
    genre: Genre.M,
    etat: Etat.Actif,
    classement: 5,
    moyenneGeneraleCC: 14,
    moyenneGeneraleCT: 16,
    moyenneGenerale: 15,
    notes: [{
      nomUE: 'Mathematics',
      codeUE: 'MATH101',
      ec: ['EC1', 'EC2'],
      noteCC: 14,
      noteCT: 16,
    }]
  };

  let mockSesamienService = {
    deleteSesamienByID: jasmine.createSpy('deleteSesamienByID').and.returnValue(of(null)),
    getSesamienById: jasmine.createSpy('getSesamienById').and.returnValue(of(testSesamien))
};
  let mockRouter: any;
  let mockActivatedRoute;
  

  beforeEach(() => {
    mockRouter = jasmine.createSpyObj(['navigate']);
    mockActivatedRoute = {
      snapshot: {
        paramMap: {
          get: jasmine.createSpy('get').and.returnValue('1')
        }
      }
    };

    TestBed.configureTestingModule({
      declarations: [DetailSesamienComponent],
      imports: [MatCardModule],
      providers: [
        { provide: SesamienService, useValue: mockSesamienService },
        { provide: Router, useValue: mockRouter },
        { provide: ActivatedRoute, useValue: mockActivatedRoute }
      ]
    });

    fixture = TestBed.createComponent(DetailSesamienComponent);
    component = fixture.componentInstance;
  });

  // Test if the component is correctly created
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Test if the component initializes the Sesamien from the service
  it('should initialize sesamien from the service', () => {
    fixture.detectChanges();
    expect(component.sesamien).toEqual(testSesamien);
  });

  // Test if the component can delete a Sesamian and navigate
  it('should delete a sesamien and navigate', () => {
    component.deleteSesamien(testSesamien);
    expect(mockSesamienService.deleteSesamienByID).toHaveBeenCalledWith('1');
    expect(mockRouter.navigate).toHaveBeenCalledWith(['/sesamiens']);
  });

  // Test if the component can navigate to a Sesamien modification
  it('should navigate to edit sesamien', () => {
    component.goToEditSesamien(testSesamien);
    expect(mockRouter.navigate).toHaveBeenCalledWith(['/edit/sesamien', '1']);
  });

});
