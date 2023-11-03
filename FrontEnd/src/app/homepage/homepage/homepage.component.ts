import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from 'src/app/user/authentification.service';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(public authService: AuthentificationService){
    
  }

  ngOnInit(): void {
      
  }

}
