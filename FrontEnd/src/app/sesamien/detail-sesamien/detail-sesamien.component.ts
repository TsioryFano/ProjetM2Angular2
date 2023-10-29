import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Mention, Sesamien, Genre } from '../sesamien';
import { SesamienService } from '../sesamien.service';

@Component({
  selector: 'app-detail-sesamien',
  templateUrl: './detail-sesamien.component.html'
})
export class DetailSesamienComponent implements OnInit { 

  sesamienList: Sesamien [];
  sesamien: Sesamien|undefined;
  isAdmin: boolean = true; 
  isEditing: boolean = false;
  mentionOptions: string[] = [Mention.S, Mention.L];
  Genre = Genre;
  //Genre: string[] = [Genre.F, Genre.M];

  
  constructor (
    private route: ActivatedRoute,
    private router: Router,
    private sesamienService: SesamienService) 
    { }

  ngOnInit(): void {
    const sesamienId: string | null = this.route.snapshot.paramMap.get('id');
    if (sesamienId) {
      this.sesamienService.getSesamienById(+sesamienId)
        .subscribe(sesamien => this.sesamien = sesamien);
    }
      }   

  
  deleteSesamien(sesamien: Sesamien){
    this.sesamienService.deleteSesamienByID(sesamien.id)
    .subscribe(()=>this.goToSesamienList());
  }
  
  goToSesamienList(){
    this.router.navigate(['/sesamiens']);
  }
  
  goToEditSesamien(sesamien: Sesamien){
    this.router.navigate(['/edit/sesamien',sesamien.id]);
  }

  enableEdit(): void {
    this.isEditing = true;
  }

  saveChanges(): void {
    this.isEditing = false;
  }

}
