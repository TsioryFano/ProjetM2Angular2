import { TestBed, ComponentFixture } from '@angular/core/testing';
import { BorderCardDirective } from './border-card.directive';
import { ElementRef, Renderer2, Component } from '@angular/core';
import { ListSesamienComponent } from './list-sesamien/list-sesamien.component';

describe('BorderCardDirective', () => {
  let fixture: ComponentFixture<ListSesamienComponent>; // Remplacez SomeComponent par le composant réel où la directive est utilisée.
  let renderer: Renderer2;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BorderCardDirective, ListSesamienComponent], // Remplacez SomeComponent par le composant réel.
    });

    fixture = TestBed.createComponent(ListSesamienComponent); // Remplacez SomeComponent par le composant réel.
    renderer = fixture.componentRef.injector.get(Renderer2); // Obtenez une instance de Renderer2.

  });

  it('should create an instance', () => {
    const el = new ElementRef(null); // Créez un élément DOM simulé (dans ce cas, null).

    // Passez les deux dépendances nécessaires à la directive.
    const directive = new BorderCardDirective(el, renderer);

    expect(directive).toBeTruthy();
  });
});
