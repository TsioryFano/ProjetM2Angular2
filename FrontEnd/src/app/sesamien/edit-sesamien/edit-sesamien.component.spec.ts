import { TestBed, ComponentFixture, inject } from '@angular/core/testing';
import { EditSesamienComponent } from './edit-sesamien.component';
import { Etat, Genre, Mention, RegionOrigine, Sesamien } from '../sesamien';
import { ActivatedRoute, Router } from '@angular/router';
import { SesamienService } from '../sesamien.service';
import { of } from 'rxjs';

describe('EditSesamienComponent', () => {
  let component: EditSesamienComponent;
  let fixture: ComponentFixture<EditSesamienComponent>;
  let mockSesamienService: any, mockRouter : any, mockActivatedRoute: any;

  beforeEach(() => {
    mockSesamienService = jasmine.createSpyObj(['getSesamienById']);
    mockRouter = jasmine.createSpyObj(['navigate']);
    mockActivatedRoute = {
      snapshot: {
        paramMap: jasmine.createSpyObj(['get'])
      }
    };

    TestBed.configureTestingModule({
      declarations: [EditSesamienComponent],
      providers: [
        { provide: SesamienService, useValue: mockSesamienService },
        { provide: Router, useValue: mockRouter },
        { provide: ActivatedRoute, useValue: mockActivatedRoute }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(EditSesamienComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch the sesamien based on the ID from the route on initialization', () => {
    const sesamien: Sesamien = { id: '1',
    nom: 'Rakoto',
    prenoms: 'Jean Michel',
    prenomUsuel: 'Jean',
    mention: Mention.S,
    age: 24,
    promotion: 24,
    image: 'path/to/image.jpg',
    regionOrigine: RegionOrigine.AtsimoAndrefana,
    genre: Genre.M,
    etat: Etat.Actif,
    classement: 1,
    moyenneGeneraleCC: 15.5,
    moyenneGeneraleCT: 16,
    moyenneGenerale: 15.75,
    notes: [
      {
        nomUE: 'Mathématiques',
        codeUE: 'MATH101',
        ec: ['Algèbre', 'Analyse'],
        noteCC: 14,
        noteCT: 16
      },
      {
        nomUE: 'Physique',
        codeUE: 'PHY101',
        ec: ['Mécanique', 'Optique'],
        noteCC: 15,
        noteCT: 15
      }
    ]
  };
    mockActivatedRoute.snapshot.paramMap.get.and.returnValue('1');
    mockSesamienService.getSesamienById.and.returnValue(of(sesamien));

    component.ngOnInit();

    expect(component.sesamien).toBe(sesamien);
  });

  it('should navigate to the sesamien list', () => {
    component.goToSesamienList();
    expect(mockRouter.navigate).toHaveBeenCalledWith(['/sesamiens']);
  });

  it('should navigate to the edit page for a specific sesamien', () => {
    const sesamien: Sesamien = {
      id: '2',
      nom: 'Randrianasolo',
      prenoms: 'Ando Nomena',
      prenomUsuel: 'Ando',
      mention: Mention.L,
      age: 25,
      promotion: 24,
      image: 'path/to/image2.jpg',
      regionOrigine: RegionOrigine.Analamanga,
      genre: Genre.F,
      etat: Etat.Actif,
      classement: 2,
      moyenneGeneraleCC: 14.5,
      moyenneGeneraleCT: 14.5,
      moyenneGenerale: 14.5,
      notes: [
        {
          nomUE: 'Biologie',
          codeUE: 'BIO101',
          ec: ['Génétique', 'Écologie'],
          noteCC: 15,
          noteCT: 14
        },
        {
          nomUE: 'Chimie',
          codeUE: 'CHIM101',
          ec: ['Organique', 'Inorganique'],
          noteCC: 13,
          noteCT: 15
        }
      ]
    };
    component.goToEditSesamien(sesamien);
    expect(mockRouter.navigate).toHaveBeenCalledWith(['edit/sesamien/', sesamien.id]);
  });
});
