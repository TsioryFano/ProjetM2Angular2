import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Sesamien } from './sesamien';
import { Observable, catchError, of, tap } from 'rxjs';
import { SESAMIENS } from './mock-sesamien-list';

@Injectable()

export class SesamienService {
  
  /**getSesamien(sesamienId: string) {
    throw new Error('Method not implemented.');
  }
  **/
  //constructor(private http: HttpClient){}

  getSesamienList():Sesamien[] {
    return SESAMIENS;
  }

  getSesamienById(sesamienId: number): Sesamien | undefined{
    return SESAMIENS.find(sesamien => sesamien.id == sesamienId);
  }
/** 
  searchSesamienList(term:string):Observable<Sesamien[]>{
    if(term.length <=1) {
      return of([]);
    }

    return this.http.get<Sesamien>(`api/sesamiens/?name=${term}`).pipe(
      tap((response)=> this.log(response)),
      catchError((error)=> this.handleError(error,[]))
    );
  }

  updateSesamien(sesamien: Sesamien): Observable<null> {
    const httpOptions = {
     headers: new HttpHeaders({'Content-Type': 'application/json'})
    };

    return this.http.put('api/sesamiens',sesamien, httpOptions).pipe(
     tap((response)=>this.log(response)),
     catchError((error)=>this.handleError(error, null))
    );
 }

 addSesamien(sesamien: Sesamien):Observable<Sesamien> {
  const httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
   };

   return this.http.post<Sesamien>('api/sesamiens', sesamien, httpOptions).pipe(
    tap((response)=>this.log(response)),
     catchError((error)=>this.handleError(error, null))
   );
 }

 deleteSesamienByID(sesamienId: number): Observable<null>{
  return this.http.delete(`api/sesamiens/${sesamienId}`).pipe(
    tap((response)=>this.log(response)),
    catchError((error)=>this.handleError(error, null))
  );
 }

  private log(response: any){
    console.table(response);
  }

  private handleError(error: Error, errorValue: any){
    console.error(error);
    return of (errorValue);
  }
*/
  getSesamienMentionList():string[]{
    return ['S','L'];
  }
}
