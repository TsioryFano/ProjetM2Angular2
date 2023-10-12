import { Component, OnInit } from '@angular/core';
import { Sesamien } from '../sesamien';
import { ActivatedRoute, Router } from '@angular/router';
import { SesamienService } from '../sesamien.service';

@Component({
  selector: 'app-edit-sesamien',
  templateUrl: './edit-sesamien.component.html'
})
export class EditSesamienComponent implements OnInit {

  sesamien: Sesamien | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private sesamienService: SesamienService
  ){  }

  ngOnInit(){
    const sesamienId: string|null = this.route.snapshot.paramMap.get('id');
    if(sesamienId){
      this.sesamien = this.sesamienService.getSesamienById(+sesamienId);
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

goToSesamienList(){
  this.router.navigate(['/sesamiens'])
}

goToEditSesamien(sesamien: Sesamien){
  this.router.navigate(['edit/sesamien/',sesamien.id]);
}

}