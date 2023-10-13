import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SesamienFormComponent } from './sesamien-form.component';
import { SesamienService } from '../sesamien.service';
import { of } from 'rxjs';
import { Router } from '@angular/router';

describe('SesamienFormComponent', () => {
  let component: SesamienFormComponent;
  let fixture: ComponentFixture<SesamienFormComponent>;
  let sesamienService: SesamienService;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SesamienFormComponent],
      imports: [RouterTestingModule],
      providers: [SesamienService]
    });

    fixture = TestBed.createComponent(SesamienFormComponent);
    component = fixture.componentInstance;
    sesamienService = TestBed.inject(SesamienService);
    router = TestBed.inject(Router);

    // Initialiser le composant avec des données factices
    component.sesamien = {
      id: 1,
      name: 'Doe',
      picture: 'image.jpg',
      hp: 15, 
      cp: 20,
      mentions: [],
      created: new Date() 
    };
    component.isAddForm = true;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize mentions from the service', () => {
    const mentionList = ['S', 'L'];
    spyOn(sesamienService, 'getSesamienMentionList').and.returnValue(mentionList);

    component.ngOnInit();

    expect(component.mentions).toEqual(mentionList);
  });

  it('should check if a mention is selected', () => {
    component.sesamien.mentions = ['S', 'L'];

    expect(component.hasMention('S')).toBeTruthy();
    expect(component.hasMention('A')).toBeFalsy();
  });

  it('should select and unselect mentions', () => {
    const event: Event = new Event('click'); 
    (event.target as HTMLInputElement) = { checked: true } as HTMLInputElement;
    
    // Ajouter une mention
    component.selectMention(event, 'S');
    expect(component.sesamien.mentions).toEqual(['S']);

    // Supprimer une mention
    if(event.target) {
    (event.target as HTMLInputElement).checked = false;
    component.selectMention(event, 'S');
    expect(component.sesamien.mentions).toEqual([]);
    }
  });

  it('should validate mentions', () => {
    component.sesamien.mentions = ['S'];

    // Une mention est déjà sélectionnée, donc ajouter une autre mention ne sera pas valide
    expect(component.isMentionsValid('L')).toBeFalsy();

    // Si aucune mention n'est sélectionnée, ajouter une mention sera valide
    component.sesamien.mentions = [];
    expect(component.isMentionsValid('S')).toBeTruthy();
  });

  it('should submit the form and navigate', () => {
    const routerSpy = spyOn(router, 'navigate');
    component.onSubmit();

    expect(routerSpy).toHaveBeenCalledWith(['/sesamien', component.sesamien.id]);
  });
});
