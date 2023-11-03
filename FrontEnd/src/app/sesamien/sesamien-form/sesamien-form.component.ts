import { Component, Input, OnInit } from '@angular/core';
import { SesamienService } from '../sesamien.service';
import { Sesamien, Mention, Genre, RegionOrigine } from '../sesamien'; 
import { Router } from '@angular/router';

/**
 * Component for handling the form related to "Sesamien".
 */
@Component({
  selector: 'app-sesamien-form',
  templateUrl: './sesamien-form.component.html',
  styleUrls: ['./sesamien-form.component.css']
})
export class SesamienFormComponent implements OnInit {
  @Input() sesamien: Sesamien;
  Mention: Mention[]; 

  /** Determines if the form is in "add" mode */
  isAddForm: boolean;

  // Enums for template access
  Genre = Genre;
  RegionOrigine = RegionOrigine;
  Object = Object;

  constructor(
    private sesamienService: SesamienService,
    private router: Router
  ) {}

  errorMessage: string | null = null;

  ngOnInit() {
    console.log(this.sesamien);
    this.Mention = Object.values(Mention);
    this.isAddForm = this.router.url.includes('add');
  }

  /**
   * Determines if the given mention matches the mention of the sesamien.
   * @param mention The mention to check.
   * @returns A boolean indicating if the mentions match.
   
  hasMention(mention: Mention): boolean {
    return this.sesamien.mention === mention;
  }

  /**
   * Sets the mention of the sesamien.
   * @param $event The event object.
   * @param mention The mention to set.
   
  selectMention($event: Event, mention: Mention) {
    this.sesamien.mention = mention;
  }
  */
  /**
   * Placeholder for future validation logic for mentions.
   * @param mention The mention to validate.
   * @returns A boolean indicating if the mention is valid.
  
  isMentionsValid(mention: Mention): boolean {    
    return true;
  }
   */

  /**
   * Validates the given sesamien data.
   * @param sesamien The sesamien data to validate.
   * @returns A boolean indicating if the sesamien data is valid.
   */
  isValidSesamien(sesamien: Sesamien): boolean {
    return !!(sesamien 
      && sesamien.nom 
      && typeof sesamien.prenoms === 'string'
      && typeof sesamien.prenomUsuel === 'string'
      && Object.values(Mention).includes(sesamien.mention)
      && Object.values(Genre).includes(sesamien.genre)
      && typeof sesamien.age === 'number' 
    );
  }

  /**
   * Handles the form submission. Depending on the mode (add or edit), it will either add a new sesamien or update an existing one.
   */
  onSubmit() {
    if (!this.isValidSesamien(this.sesamien)) {
      console.error('Données invalides:', this.sesamien);
      return;
    }
    console.log("Données envoyées dans la requête PUT : ", this.sesamien);

    if (this.isAddForm) {
      this.sesamienService
        .addSesamien(this.sesamien)
        .subscribe({
          next:(sesamien: Sesamien) =>
          this.router.navigate(['/sesamien', sesamien.id]),
          error: err => this.errorMessage = "Une erreur est survenue lors de l'ajout du Sesamien."
    });
    } else {
      if (this.sesamien.id) {
        this.sesamienService
          .updateSesamien(String(this.sesamien.id), this.sesamien)
          .subscribe({next:() => this.router.navigate(['/sesamien', this.sesamien.id])});
      } else {
        console.error('L\'ID de Sesamien est manquant.');
      }
    }
  }
}
