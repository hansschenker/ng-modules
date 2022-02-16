import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
// rxjs
import { catchError, Observable, throwError } from 'rxjs';
// products
import { Product } from './state/product.interface';

// GET /todos – fetch all todos
// GET /todos/: id – fetch a single todo detail by id
// POST /todos – create a new todo
// PUT /todos/: id – update a todo by id
// PATCH /todos/: id – partially update a todo by id
// DELETE /todos/:id – delete a todo by id

@Injectable()
export class ProductService {
  baseUrl = '/api/products';
  products$ = this.http.get<Product[]>(this.baseUrl);
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) {}

  // Create
  create$(product: Product): Observable<Product> {
    //let API_URL = `${this.baseUrl}`;
    return this.http
      .post<Product>(this.baseUrl, product)
      .pipe(catchError(this.handleError));
  }

  // Read
  list$ = this.http.get<Product[]>(this.baseUrl);


  // Update
  update$(id: number, product: Product): Observable<Product> {
    let API_URL = `${this.baseUrl}/${id}`;
    return this.http
      .put<Product>(API_URL, product, { headers: this.headers })
      .pipe(catchError(this.handleError));
  }

  // Delete
  delete$(id: number): Observable<Product> {
    var API_URL = `${this.baseUrl}/${id}`;
    return this.http
      .delete<Product>(API_URL)
      .pipe(catchError(this.handleError));
  }

  // Handle API errors
  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }
    // return throwError('Something bad happened; please try again later.');
    return throwError(() => new Error('Error retrieving data'));
  }
}
