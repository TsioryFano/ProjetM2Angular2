import { Component, OnInit } from '@angular/core';
import { SESAMIENS } from './mock-sesamien-list';
import { Sesamien } from './sesamien';


@Component({
  selector: 'app-root',
  templateUrl: `app.component.html` 
})
export class AppComponent implements OnInit {
  sesamienList: Sesamien[] =  SESAMIENS;
  sesamienSelected: Sesamien| undefined;

  ngOnInit(): void {
      console.log( this.sesamienList);
  }

  selectSesamien(sesamienId: number){
    const sesamien: Sesamien|undefined = this.sesamienList.find(sesamien => sesamien.id === sesamienId)

    if(sesamien){
      console.log(`Vous avez demander le sesamien ${sesamien.name}`)
      this.sesamienSelected = sesamien;
    } else{
      console.log(`n'existe pas`)
      this.sesamienSelected = sesamien;
    }
  }
}
