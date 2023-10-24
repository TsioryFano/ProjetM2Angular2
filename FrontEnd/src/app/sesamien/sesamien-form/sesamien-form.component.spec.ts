import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SesamienFormComponent } from './sesamien-form.component';
import { SesamienService } from '../sesamien.service';
import { of } from 'rxjs';
import { Router } from '@angular/router';
import { Sesamien, Mention } from '../sesamien'; // Importez le type Mention depuis le fichier sesamien.ts

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
    component.sesamien = new Sesamien(); // Assurez-vous de créer un nouvel objet Sesamien
    component.sesamien.id = 1;
    component.sesamien.nom = 'Doe';
    component.sesamien.prenomUsuel = 'John'; // Ajoutez un prénom usuel factice
    component.sesamien.mention = Mention.S; // Définissez la mention
    component.sesamien.age = 25; // Définissez l'âge
    component.sesamien.promotion = 'P24'; // Définissez la promotion
    component.isAddForm = true;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize mentions from the service', () => {
    const mentionList: Mention[] = [Mention.S, Mention.L];
    spyOn(sesamienService, 'getSesamienMentionList').and.returnValue(mentionList);

    component.ngOnInit();

    expect(component.mentions).toEqual(mentionList);
  });

  it('should check if a mention is selected', () => {
    component.sesamien.mention = Mention.S; // Définissez la mention à S

    expect(component.hasMention(Mention.S)).toBeTruthy();
    expect(component.hasMention(Mention.L)).toBeFalsy();
  });

  it('should select and unselect mentions', () => {
    const event: Event = new Event('click');
    (event.target as HTMLInputElement) = { checked: true } as HTMLInputElement;

    // Sélectionnez une mention
    component.selectMention(event, Mention.L); // Sélectionnez une mention différente

    expect(component.sesamien.mention).toEqual(Mention.L);

    // Désélectionnez la mention
    if (event.target) {
      (event.target as HTMLInputElement).checked = false;
      component.selectMention(event, Mention.S); // Désélectionnez la mention
      expect(component.sesamien.mention).toBeUndefined(); // La mention devrait être undefined
    }
  });

  it('should validate mentions', () => {
    component.sesamien.mention = Mention.S; 
    const isValid = component.isMentionsValid(Mention.S);

    if (component.sesamien.mention === Mention.S) {
      expect(isValid).toBeTruthy();
    } else {

    }
  });

  it('should submit the form and navigate', () => {
    const routerSpy = spyOn(router, 'navigate');
    component.onSubmit();

    expect(routerSpy).toHaveBeenCalledWith(['/sesamien', component.sesamien.id]);
  });
});
