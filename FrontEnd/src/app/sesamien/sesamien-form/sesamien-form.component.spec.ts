import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SesamienFormComponent } from './sesamien-form.component';
import { SesamienService } from '../sesamien.service';
import { HttpClientModule } from '@angular/common/http';
import { of } from 'rxjs';
import { Router } from '@angular/router';
import { Sesamien, Mention } from '../sesamien';

describe('SesamienFormComponent', () => {
  let component: SesamienFormComponent;
  let fixture: ComponentFixture<SesamienFormComponent>;
  let sesamienService: SesamienService;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SesamienFormComponent],
      imports: [RouterTestingModule, HttpClientModule],
      providers: [SesamienService]
    });

    fixture = TestBed.createComponent(SesamienFormComponent);
    component = fixture.componentInstance;
    sesamienService = TestBed.inject(SesamienService);
    router = TestBed.inject(Router);

    // Initialiser le composant avec des données factices
    component.sesamien = new Sesamien();
    component.sesamien.id = "1";
    component.sesamien.nom = 'Doe';
    component.sesamien.prenomUsuel = 'John';
    component.sesamien.mention = Mention.S;
    component.sesamien.age = 25;
    component.sesamien.promotion = 24;
    component.isAddForm = true;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize mentions from the service', () => {
    const mentionList: Mention[] = [Mention.S, Mention.L];
    spyOn(sesamienService, 'getSesamienMentionList').and.returnValue(mentionList); // Utilisez of() pour simuler un observable

    component.ngOnInit();

    expect(component.Mention).toEqual(mentionList);
  });

  it('should submit the form and navigate', () => {
    const addSpy = spyOn(sesamienService, 'addSesamien').and.returnValue(of(component.sesamien)); // Simulez la méthode addSesamien
    const routerSpy = spyOn(router, 'navigate');

    component.onSubmit();

    expect(addSpy).toHaveBeenCalledWith(component.sesamien);
    expect(routerSpy).toHaveBeenCalledWith(['/sesamien', component.sesamien.id]);
  });
});
