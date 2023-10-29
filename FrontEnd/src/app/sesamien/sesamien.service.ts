import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Sesamien } from './sesamien';
import { Observable, catchError, of, tap, Subject } from 'rxjs';
import { SESAMIENS_URL, SESAMIEN_BY_ID_URL } from '../constants/endpoints';


/**
 * Service pour gérer les actions CRUD pour les Sesamiens.
 */
@Injectable()
export class SesamienService {

 /**
   * Constructeur pour le service Sesamien.
   * @param {HttpClient} http - Le client HTTP pour faire des requêtes.
   */
  constructor(private http: HttpClient) { }

 /**
   * Récupère la liste des Sesamiens depuis le backend.
   * @returns {Observable<Sesamien[]>} - Un observable contenant la liste des Sesamiens.
   */
  getSesamienList(): Observable<Sesamien[]> {
    return this.http.get<Sesamien[]>(SESAMIENS_URL).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, []))
    );
  }
/**
  * Récupère un Sesamien par son ID depuis le backend.
  * @param {number} sesamienId - L'ID du Sesamien à récupérer.
  * @returns {Observable<Sesamien | undefined>} - Un observable contenant le Sesamien ou undefined.
*/
  getSesamienById(sesamienId: number): Observable<Sesamien | undefined> {
    return this.http.get<Sesamien>(`${SESAMIEN_BY_ID_URL}${sesamienId}`).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, undefined))
    );
  }
 /**
   * Recherche des Sesamiens par leur nom.
   * @param {string} term - Le terme de recherche.
   * @returns {Observable<Sesamien[]>} - Un observable contenant la liste des Sesamiens correspondants.
   */
    searchSesamienList(term:string):Observable<Sesamien[]>{
      if(term.length <=1) {
        return of([]);
      }
      return this.http.get<Sesamien[]>(`api/sesamiens/?name=${term}`).pipe(
        tap((response)=> this.log(response)),
        catchError((error)=> this.handleError(error,[]))
      );
    }
  /**
   * Met à jour un Sesamien par son ID.
   * @param {number} sesamienId - L'ID du Sesamien à mettre à jour.
   * @param {Sesamien} updatedSesamien - Les nouvelles données du Sesamien.
   * @returns {Observable<Sesamien | undefined>} - Un observable contenant le Sesamien mis à jour ou undefined.
   */
  updateSesamien(sesamienId: number, updatedSesamien: Sesamien): Observable<Sesamien | undefined> {
    const url = `${SESAMIEN_BY_ID_URL}${sesamienId}`;
    return this.http.put<Sesamien>(url, updatedSesamien).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, undefined))
    );
  }
/**
   * Ajoute un nouveau Sesamien.
   * @param {Sesamien} sesamien - Les données du nouveau Sesamien.
   * @returns {Observable<Sesamien>} - Un observable contenant le Sesamien ajouté.
   */
addSesamien(sesamien: Sesamien):Observable<Sesamien> {
       return this.http.post<Sesamien>(SESAMIENS_URL, sesamien).pipe(
      tap((response)=>this.log(response)),
       catchError((error)=>this.handleError(error, null))
     );
   }

 /**
   * Supprime un Sesamien par son ID.
   * @param {number} sesamienId - L'ID du Sesamien à supprimer.
   * @returns {Observable<null>} - Un observable de type null.
   */
  deleteSesamienByID(sesamienId: number): Observable<null>{
    return this.http.delete(`api/sesamiens/${sesamienId}`).pipe(
      tap((response)=>this.log(response)),
      catchError((error)=>this.handleError(error, null))
    );
   }
// -----------------------------------
 /**
   * Affiche les données sous forme de tableau dans la console.
   * @private
   * @param {any} response - La réponse à logger.
   */
  private log(response: any) {
    if (response !== null && response !== undefined) {
      console.table(response);
    } else {
      console.error("Tentative d'affichage d'une réponse null ou undefined");
    }
  }

/**
   * Gère les erreurs des requêtes HTTP.
   * @private
   * @param {Error} error - L'erreur à gérer.
   * @param {any} errorValue - La valeur à renvoyer en cas d'erreur.
   * @returns {Observable<any>} - Un observable contenant errorValue.
   */
private handleError(error: HttpErrorResponse | Error, errorValue: any): Observable<any> {
  if (error instanceof HttpErrorResponse && error.status === 404) {
      // Handle HTTP errors
      console.error(
          `Backend returned code ${error.status}, ` +
          `body was: ${error.error}`
      );
  } else {
      // Handle generic JavaScript errors
      console.error(error.message);
  }
  console.log("Full error object:", error);
  return of(errorValue);
}

  /**
   * Renvoie la liste des mentions disponibles pour un Sesamien.
   * @returns {string[]} - Un tableau contenant les mentions possibles.
   */
  getSesamienMentionList(): string[] {
    return ['S', 'L'];
  }

  private modalSubject = new Subject<any>();
  modalState = this.modalSubject.asObservable();

  openModal(data: any) {
    this.modalSubject.next({
      type: 'OPEN',
      data
    });
  }

  closeModal() {
    this.modalSubject.next({
      type: 'CLOSE'
    });
  }
}
