import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Mention, Sesamien, Genre } from '../sesamien';
import { SesamienService } from '../sesamien.service';

/**
 * Component for displaying the details of a Sesamien.
 */
@Component({
  selector: 'app-detail-sesamien',
  templateUrl: './detail-sesamien.component.html',
  styleUrls: ['./detail-sesamien.component.css']
})
export class DetailSesamienComponent implements OnInit { 
  /** List of all Sesamien entities. */
  sesamienList: Sesamien [];

   /** Current Sesamien entity being displayed. */
  sesamien: Sesamien|undefined;

   /** Flag indicating if the current user is an admin. */
  isAdmin: boolean = true; 

   /** Flag indicating if the component is in edit mode. */
  isEditing: boolean = false;

/** Available mention options. */
  mentionOptions: string[] = [Mention.S, Mention.L];
  
  /** Enumeration of possible genres. */
  Genre = Genre;
 
 
  //Genre: string[] = [Genre.F, Genre.M];

    /**
   * Constructor for the DetailSesamienComponent.
   * 
   * @param {ActivatedRoute} route - The active route object.
   * @param {Router} router - The router object.
   * @param {SesamienService} sesamienService - The service for Sesamien operations.
   */
  constructor (
    private route: ActivatedRoute,
    private router: Router,
    private sesamienService: SesamienService) 
    { }

  ngOnInit(): void {
    const sesamienId: string | null = this.route.snapshot.paramMap.get('id');
    if (sesamienId) {
      this.sesamienService.getSesamienById(sesamienId)
        .subscribe(sesamien => this.sesamien = sesamien);
    }
      }   

  /**
   * Deletes a given Sesamien entity.
   * 
   * @param {Sesamien} sesamien - The Sesamien entity to be deleted.
   */
  deleteSesamien(sesamien: Sesamien){
    if (sesamien.id){
    this.sesamienService.deleteSesamienByID(String(sesamien.id))
    .subscribe(()=>this.goToSesamienList());
    }else{
    console.error('L\'ID de Sesamien est manquant.');
    }
  }
  
  /**
   * Navigates to the list of all Sesamien entities.
   */
  goToSesamienList(){
    this.router.navigate(['/sesamiens']);
  }
  
   /**
   * Navigates to the edit page for a given Sesamien entity.
   * 
   * @param {Sesamien} sesamien - The Sesamien entity to be edited.
   */
  goToEditSesamien(sesamien: Sesamien){
    this.router.navigate(['/edit/sesamien',sesamien.id]);
  }

  /**
   * Enables the editing mode for the component.
   */
  enableEdit(): void {
    this.isEditing = true;
  }
/**
   * Saves the changes made to the Sesamien entity and exits the editing mode.
   */
  saveChanges(): void {
    this.isEditing = false;
  }

}
