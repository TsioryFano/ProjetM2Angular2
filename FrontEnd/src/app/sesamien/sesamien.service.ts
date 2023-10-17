import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Sesamien } from './sesamien';
import { Observable, catchError, of, tap } from 'rxjs';
import { SESAMIENS } from './mock-sesamien-list';
import { SESAMIENS_URL, SESAMIEN_BY_ID_URL } from '../constants/endpoints';

@Injectable()

export class SesamienService {

  /**getSesamien(sesamienId: string) {
    throw new Error('Method not implemented.');
  }
  **/
  constructor(private http: HttpClient) { }


  //--------------------------- getSesamienList -----------------
  getSesamienList(): Observable<Sesamien[]> {
    return this.http.get<Sesamien[]>(SESAMIENS_URL).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, []))
    );
  }

  /** getSesamienList():Sesamien[] {
     return SESAMIENS;
   }
  */
  //----------------- getSesamienById --------------------

  getSesamienById(sesamienId: number): Observable<Sesamien | undefined> {
    return this.http.get<Sesamien>(`${SESAMIEN_BY_ID_URL}${sesamienId}`).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, undefined))
    );
  }

  /** getSesamienById(sesamienId: number): Sesamien | undefined{
     return SESAMIENS.find(sesamien => sesamien.id == sesamienId);
   }
  */
  // -----------------------------------

  /** 
  //----------------- searchSesamienList --------------------

    searchSesamienList(term:string):Observable<Sesamien[]>{
      if(term.length <=1) {
        return of([]);
      }
  
      return this.http.get<Sesamien>(`api/sesamiens/?name=${term}`).pipe(
        tap((response)=> this.log(response)),
        catchError((error)=> this.handleError(error,[]))
      );
    }
     */
//------------- updateSesamienById --------------------
 /* updateSesamien(sesamien: Sesamien): Observable<null> {
      const httpOptions = {
       headers: new HttpHeaders({'Content-Type': 'application/json'})
      };
  
      return this.http.put(SESAMIENS_URL,sesamien, httpOptions).pipe(
       tap((response)=>this.log(response)),
       catchError((error)=>this.handleError(error, null))
      );
  }
  */
  updateSesamien(sesamienId: number, updatedSesamien: Sesamien): Observable<Sesamien | undefined> {
    const url = `${SESAMIEN_BY_ID_URL}${sesamienId}`;
    return this.http.put<Sesamien>(url, updatedSesamien).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, undefined))
    );
  }

//------------- addSesamienById --------------------
addSesamien(sesamien: Sesamien):Observable<Sesamien> {
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
     };
  
     return this.http.post<Sesamien>(SESAMIENS_URL, sesamien, httpOptions).pipe(
      tap((response)=>this.log(response)),
       catchError((error)=>this.handleError(error, null))
     );
   }

// -----------------------------------
  
//------------- deleteSesamienById --------------------

   deleteSesamienByID(sesamienId: number): Observable<null>{
    return this.http.delete(`api/sesamiens/${sesamienId}`).pipe(
      tap((response)=>this.log(response)),
      catchError((error)=>this.handleError(error, null))
    );
   }
// -----------------------------------

  private log(response: any) {
    console.table(response);
  }

  private handleError(error: Error, errorValue: any) {
    console.error(error);
    return of(errorValue);
  }

  getSesamienMentionList(): string[] {
    return ['S', 'L'];
  }
}
