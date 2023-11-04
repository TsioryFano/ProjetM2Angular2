import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { SearchSesamienComponent } from './search-sesamien.component';
import { SesamienService } from '../sesamien.service';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { Etat, Genre, Mention, RegionOrigine, Sesamien } from '../sesamien';

describe('SearchSesamienComponent', () => {
  let component: SearchSesamienComponent;
  let fixture: ComponentFixture<SearchSesamienComponent>;
  let sesamienService: SesamienService;
  let mockRouter = {
    navigate: jasmine.createSpy('navigate')
  };

  // Mock du SesamienService
  let mockSesamienService = {
    searchSesamienList: jasmine.createSpy('searchSesamienList').and.returnValue(of([])) // Retourne un Observable vide pour l'instant
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchSesamienComponent ],
      providers: [
        { provide: SesamienService, useValue: mockSesamienService },
        { provide: Router, useValue: mockRouter }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchSesamienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    sesamienService = TestBed.inject(SesamienService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call searchSesamienList on search', fakeAsync(() => {
    let term = 'test';
    component.search(term);
    tick(300); // Simuler un délai pour debounceTime
    expect(sesamienService.searchSesamienList).toHaveBeenCalledWith(term);
  }));

  it('should navigate to detail view for a sesamien', () => {
    const mockSesamien: Sesamien = {
      id: '1',
      nom: 'Dupont',
      prenoms: 'Jean Michel',
      prenomUsuel: 'Jean',
      mention: Mention.L,
      age: 21,
      promotion: 2024,
      image: 'path/to/image.jpg',
      regionOrigine: RegionOrigine.ANOSY, // Remplacez par la valeur réelle attendue
      genre: 'M' as Genre, // ou Genre.M si c'est une enum
      etat: Etat.Actif, // Remplacez par la valeur réelle attendue
      classement: 1,
      moyenneGeneraleCC: 14.5,
      moyenneGeneraleCT: 15.2,
      moyenneGenerale: 14.8,
     notes: [
        {
          nomUE: "Unité d'Enseignement 1",
          codeUE: "UE101",
          ec: ["EC1", "EC2"],
          noteCC: 12.5,
          noteCT: 15.0
        },
      ]
    };
    component.goToDetail( mockSesamien);
    expect(mockRouter.navigate).toHaveBeenCalledWith(['/sesamien', mockSesamien.id]);
  });
  
  // Tests supplémentaires peuvent être ajoutés ici...
});
