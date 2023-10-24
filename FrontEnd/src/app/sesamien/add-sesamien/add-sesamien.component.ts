import { Component, OnInit } from '@angular/core';
import { Sesamien } from '../sesamien';

@Component({
  selector: 'app-add-sesamien',
  templateUrl: './add-sesamien.component.html',
  styleUrls: ['./add-sesamien.component.css']
})
export class AddSesamienComponent implements OnInit {
  
    sesamien: Sesamien;

  ngOnInit(): void {
      this.sesamien= new Sesamien();
  }
}
