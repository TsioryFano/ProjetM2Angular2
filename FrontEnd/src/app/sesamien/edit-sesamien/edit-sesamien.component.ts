import { Component, OnInit } from '@angular/core';
import { Sesamien } from '../sesamien';
import { ActivatedRoute, Router } from '@angular/router';
import { SesamienService } from '../sesamien.service';

/**
 * @component EditSesamienComponent
 * @description Component permettant d'éditer les informations d'un Sesamien.
 */
@Component({
  selector: 'app-edit-sesamien',
  templateUrl: './edit-sesamien.component.html'
})
export class EditSesamienComponent implements OnInit {
  
  /** 
   * L'objet Sesamien en cours d'édition.
   */
  sesamien: Sesamien | undefined;

   /**
   * @constructor
   * @param {ActivatedRoute} route - Pour accéder aux paramètres de route.
   * @param {Router} router - Pour la navigation entre routes.
   * @param {SesamienService} sesamienService - Service pour interagir avec les données de Sesamien.
   */
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private sesamienService: SesamienService
  ){  }

 /**
   * Méthode ngOnInit - Exécutée après la création du composant.
   * Récupère le Sesamien correspondant à l'ID passé en paramètre de route.
   */
  ngOnInit(){
    const sesamienId: string|null = this.route.snapshot.paramMap.get('id');
    if(sesamienId){
      this.sesamienService.getSesamienById(sesamienId)
        .subscribe(sesamien => this.sesamien = sesamien);
    } else {
      this.sesamien = undefined;
    }
  }
/*
  ngOnInit(){
    const sesamienId: string | null = this.route.snapshot.paramMap.get('id'); 
    if (sesamienId) {
      this.sesamienService.getSesamienById(+sesamienId)
        .subscribe(sesamien => this.sesamien = sesamien );
    } else {
      this.sesamien= undefined;
    }
  }
*/

/**
   * Navigue vers la liste des Sesamien.
   */
goToSesamienList(){
  this.router.navigate(['/sesamiens'])
}

/**
   * Navigue vers la page d'édition pour un Sesamien spécifique.
   * @param {Sesamien} sesamien - L'objet Sesamien à éditer.
   */
goToEditSesamien(sesamien: Sesamien){
  this.router.navigate(['edit/sesamien/',sesamien.id]);
}

}