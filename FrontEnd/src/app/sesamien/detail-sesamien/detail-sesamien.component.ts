import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Sesamien } from '../sesamien';
import { SesamienService } from '../sesamien.service';

@Component({
  selector: 'app-detail-sesamien',
  templateUrl: './detail-sesamien.component.html'
})
export class DetailSesamienComponent implements OnInit { 

  sesamienList: Sesamien [];
  sesamien: Sesamien|undefined;
  
  constructor (
    private route: ActivatedRoute,
    private router: Router,
    private sesamienService: SesamienService) 
    { }

  ngOnInit(): void {
    const sesamienId: string | null = this.route.snapshot.paramMap.get('id');
    if (sesamienId) {
      this.sesamien = this.sesamienService.getSesamienById(+sesamienId);
    }
      }   

  /*
  deleteSesamien(sesamien: Sesamien){
    this.sesamienService.deleteSesamienByID(sesamien.id)
    .subscribe(()=>this.goToSesamienList());
  }
  */
  goToSesamienList(){
    this.router.navigate(['/sesamiens']);
  }
  
  goToEditSesamien(sesamien: Sesamien){
    this.router.navigate(['/edit/sesamien',sesamien.id]);
  }

}
