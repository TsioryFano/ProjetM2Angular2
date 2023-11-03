import { Component, OnInit } from '@angular/core';
import { Sesamien } from '../sesamien';
import { Router } from '@angular/router';
import { SesamienService } from '../sesamien.service';

@Component({
  selector: 'app-list-sesamien',
  templateUrl: './list-sesamien.component.html',
  styleUrls: ['./list-sesamien.component.css']
})
export class ListSesamienComponent implements OnInit{

  sesamienList: Sesamien[];  
  isOpen = false;
  modalData: any;

  constructor(
    private router: Router,
    private sesamienService: SesamienService
    ){}

    ngOnInit(){
      this.sesamienService.getSesamienList()
      .subscribe(sesamienList => {
        if (sesamienList) {
          this.sesamienList = sesamienList;
        } else {
          console.error("La liste des sesamien est null ou undefined");
          }
        }, 
        error => console.error('Erreur lors de la récupération des sesamien:', error) 
      );
      this.sesamienService.modalState.subscribe(state => {
        if (state.type === 'OPEN') {
          this.isOpen = true;
          this.modalData = state.data;
        } else if (state.type === 'CLOSE') {
          this.isOpen = false;
          this.modalData = null;
        }
      });
    }  

  goToSesamien(sesamien: Sesamien) {
    this.router.navigate(['/sesamien', sesamien.id])
  }

  onMoreVertClicked(sesamien: any) {
    this.sesamienService.openModal(sesamien);
  }

  closeModal() {
    this.sesamienService.closeModal();
  }
}


