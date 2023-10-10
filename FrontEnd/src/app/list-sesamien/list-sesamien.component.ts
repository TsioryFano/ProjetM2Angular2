import { Component } from '@angular/core';
import { SESAMIENS } from '../mock-sesamien-list';
import { Sesamien } from '../sesamien';

@Component({
  selector: 'app-list-sesamien',
  templateUrl: './list-sesamien.component.html'
})
export class ListSesamienComponent {

  sesamienList: Sesamien[] =  SESAMIENS;  

}
