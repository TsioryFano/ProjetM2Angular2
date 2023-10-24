import { Component, OnInit } from '@angular/core';
import { Sesamien } from '../sesamien';
import { Router } from '@angular/router';
import { Observable, Subject, debounceTime, distinct, distinctUntilChanged, map, switchMap } from 'rxjs';
import { SesamienService } from '../sesamien.service';


@Component({
  selector: 'app-search-sesamien',
  templateUrl: './search-sesamien.component.html',
  styleUrls: ['./search-sesamien.component.css']
})
export class SearchSesamienComponent implements OnInit {


  searchTerms = new Subject<string>();
  sesamien$: Observable<Sesamien[]>;

  constructor(
    private router:Router,
   private sesamienService: SesamienService
    ) {
    
  }

  ngOnInit(): void {
    this.sesamien$ = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term) => this.sesamienService.searchSesamienList(term))
    );

   }

  search(term: string){
    this.searchTerms.next(term);
  }

  goToDetail(sesamien: Sesamien){
    const link = ['/sesamien', sesamien.id];
    this.router.navigate(link)
  }
}
