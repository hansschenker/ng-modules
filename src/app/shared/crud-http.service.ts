import { Observable, catchError, throwError } from 'rxjs';
import { HttpHeaders, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class CrudHttpService<T> {

  entity:string | null = null;
   apiUrl = `api/${this.entity}`;


  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) {
    console.log()
  }

  // Create
  create(item: T): Observable<T> {

    let API_URL = `${this.apiUrl}`;
    return this.http.post<T>(API_URL, item)
      .pipe(
        catchError(this.handleError)
      )
  }

  // Read
  list(entity: string) {
    this.entity = entity;
    // return this.http.get<T[]>(`${this.apiUrl}`);
    return this.http.get<T[]>(`api/${entity}`);
  }

  // Update
  update(id: number, item: T): Observable<T> {
    let API_URL = `${this.apiUrl}/${id}`;
    return this.http.put<T>(API_URL, item, { headers: this.headers }).pipe(
      catchError(this.handleError)
    )
  }

  // Delete
  delete(id: number): Observable<T> {
    var API_URL = `${this.apiUrl}/${id}`;
    return this.http.delete<T>(API_URL).pipe(
      catchError(this.handleError)
    )
  }

  // Handle API errors
  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(
      'Something bad happened; please try again later.');
  };

}
