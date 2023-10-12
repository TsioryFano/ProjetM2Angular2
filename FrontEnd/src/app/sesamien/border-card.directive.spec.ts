import { TestBed, ComponentFixture } from '@angular/core/testing';
import { BorderCardDirective } from './border-card.directive';
import { ElementRef } from '@angular/core';
import { ListSesamienComponent } from './list-sesamien/list-sesamien.component';

describe('BorderCardDirective', () => {
  let fixture: ComponentFixture<ListSesamienComponent>; // Remplacez SomeComponent par le composant réel où la directive est utilisée.

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BorderCardDirective, ListSesamienComponent], // Remplacez SomeComponent par le composant réel.
    });

    fixture = TestBed.createComponent(ListSesamienComponent); // Remplacez SomeComponent par le composant réel.
  });

  it('should create an instance', () => {
    const el = new ElementRef(null); // Créez un élément DOM simulé (dans ce cas, null).

    const directive = new BorderCardDirective(el);

    expect(directive).toBeTruthy();
  });
});
