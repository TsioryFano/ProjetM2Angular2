import { Component, OnInit } from '@angular/core';
import { Sesamien } from '../sesamien';
import { Router } from '@angular/router';
import { Observable, Subject, debounceTime, distinctUntilChanged, switchMap } from 'rxjs';
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
    ) {  }

  ngOnInit(): void {
    this.sesamien$ = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term) => this.sesamienService.searchSesamienList(term))
    );
   }
  search(term: string):void{
    // Déclenche la recherche et s'abonne aux résultats
    this.sesamien$ = this.sesamienService.searchSesamienList(term);
    this.sesamien$.subscribe(
      sesamien => {
        if (sesamien && sesamien.length > 0) {
          console.log('Sesamiens reçus:', sesamien);
        } else {
          console.log('Aucun sesamien correspondant trouvé ou erreur de requête');
        }
      },
      error => console.error('Erreur lors de la souscription aux sesamiens:', error)
    );
  }

  goToDetail(sesamien: Sesamien){
    const link = ['/sesamien', sesamien.id];
    this.router.navigate(link)
  }
}
