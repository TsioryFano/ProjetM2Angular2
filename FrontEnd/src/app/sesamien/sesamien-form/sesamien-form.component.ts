import { Component, Input, OnInit } from '@angular/core';
import { SesamienService } from '../sesamien.service';
import { Sesamien, Mention } from '../sesamien'; 
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

  constructor(
    private sesamienService: SesamienService,
    private router: Router
  ) {}

  ngOnInit() {
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

  onSubmit() {
    console.log("Données envoyées dans la requête PUT : ", this.sesamien);

    if (this.isAddForm) {
      this.sesamienService
        .addSesamien(this.sesamien)
        .subscribe((sesamien: Sesamien) =>
          this.router.navigate(['/sesamien', sesamien.id])
        );
    } else {
      this.sesamienService
        .updateSesamien(this.sesamien.id, this.sesamien)
        .subscribe(() => this.router.navigate(['/sesamien', this.sesamien.id]));
    }
  }
}
