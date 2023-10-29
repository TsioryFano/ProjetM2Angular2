import { Component, Input, OnInit } from '@angular/core';
import { SesamienService } from '../sesamien.service';
import { Sesamien, Mention, Genre, RegionOrigine } from '../sesamien'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-sesamien-form',
  templateUrl: './sesamien-form.component.html',
  styleUrls: ['./sesamien-form.component.css']
})
export class SesamienFormComponent implements OnInit {
  @Input() sesamien: Sesamien;
  mentions: Mention[]; 
  isAddForm: boolean;
  Genre = Genre;  // Pour accéder à l'énumération Genre dans le template
  RegionOrigine = RegionOrigine;  // Pour accéder à l'énumération RegionOrigine dans le template
  Object = Object;  // Pour accéder à l'objet global Object dans le template


  constructor(
    private sesamienService: SesamienService,
    private router: Router
  ) {}

  errorMessage: string | null = null;

  ngOnInit() {
    console.log(this.sesamien);
    this.mentions = Object.values(Mention); // Récupérez les mentions depuis l'enum Mention
    this.isAddForm = this.router.url.includes('add');
  }

  hasMention(mention: Mention): boolean {
    return this.sesamien.mention === mention;
  }

  selectMention($event: Event, mention: Mention) {
    this.sesamien.mention = mention;
  }

  isMentionsValid(mention: Mention): boolean {    
    return true;
  }

  isValidSesamien(sesamien: Sesamien): boolean {
    return !!(sesamien 
      && sesamien.nom 
      && typeof sesamien.prenoms === 'string'
      && typeof sesamien.prenomUsuel === 'string'
      && Object.values(Mention).includes(sesamien.mention)
      && typeof sesamien.genre === 'number'
      && typeof sesamien.age === 'number' 
    );
  }

  onSubmit() {
    if (!this.isValidSesamien(this.sesamien)) {
      console.error('Données invalides:', this.sesamien);
      return;
    }
    console.log("Données envoyées dans la requête PUT : ", this.sesamien);

    if (this.isAddForm) {
      this.sesamienService
        .addSesamien(this.sesamien)
        .subscribe((sesamien: Sesamien) =>
          this.router.navigate(['/sesamien', sesamien.id]),
          error => this.errorMessage = "Une erreur est survenue lors de l'ajout du Sesamien."
        );
    } else {
      this.sesamienService
        .updateSesamien(this.sesamien.id, this.sesamien)
        .subscribe(() => this.router.navigate(['/sesamien', this.sesamien.id]));
    }
  }
}
