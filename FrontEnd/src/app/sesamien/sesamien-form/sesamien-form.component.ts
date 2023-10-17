import { Component, Input, OnInit } from '@angular/core';
import { SesamienService } from '../sesamien.service';
import { Sesamien } from '../sesamien';
import { Router } from '@angular/router';
import { SESAMIEN_BY_ID_URL } from 'src/app/constants/endpoints';

@Component({
  selector: 'app-sesamien-form',
  templateUrl: './sesamien-form.component.html',
  styleUrls: ['./sesamien-form.component.css']
})
export class SesamienFormComponent implements OnInit {
  @Input() sesamien : Sesamien;
  mentions: string[];
  isAddForm: boolean;
 
  constructor(
    private sesamienService: SesamienService,
    private router:Router
    ) { }

  ngOnInit(){
    this.mentions = this.sesamienService.getSesamienMentionList();
    this.isAddForm = this.router.url.includes('add');
  }

  hasMention(mention:string): boolean{
    return this.sesamien.mentions.includes(mention);
  }
  selectMention($event: Event, mention: string ){
    const isChecked: boolean =($event.target as HTMLInputElement).checked;
    if(isChecked){
      this.sesamien.mentions.push(mention);
    } else {
      const index = this.sesamien.mentions.indexOf(mention);
      this.sesamien.mentions.splice(index, 1);
    }
  }
  
  isMentionsValid(mention: string): boolean{
    if(this.sesamien.mentions.length == 1 && this.hasMention(mention)){
      return false;
    }
    if(this.sesamien?.mentions.length > 1 && !this.hasMention(mention)){
      return false;
    }

    return true;
  }

  onSubmit() {
    console.log("Données envoyées dans la requête PUT : ", this.sesamien);
  
    if (this.isAddForm) {
      this.sesamienService.addSesamien(this.sesamien)
        .subscribe((sesamien: Sesamien) => this.router.navigate(['/sesamien', sesamien.id]));
    } else {
      this.sesamienService.updateSesamien(this.sesamien.id, this.sesamien)
        .subscribe(() => this.router.navigate(['/sesamien', this.sesamien.id]));
    }
  }
  
/*
  onSubmit(){
    console.log("Données envoyées dans la requête PUT : ", this.sesamien);
    console.log(this.sesamien.id);
    if(this.isAddForm){
      this.sesamienService.addSesamien(this.sesamien)
      .subscribe((sesamien:Sesamien) => this.router.navigate(['/sesamien', sesamien.id]));
    }else{    
      this.sesamienService.updateSesamien(this.sesamien)
      .subscribe(()=> this.router.navigate(['/sesamien', this.sesamien.id]));
    }
  }  
   

  onSubmit(){
    this.sesamienService.updateSesamien(this.sesamien)
      .subscribe(() =>  this.router.navigate(['/sesamien', this.sesamien.id]));
  }


  onSubmit(){
    console.log('Submit form!');
    this.router.navigate(['/sesamien', this.sesamien.id]);
  }
*/  
}
