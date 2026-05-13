import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs';
import { IUser } from './interfaceUser';

@Injectable({
  providedIn: 'root',
})
export class Mockapi {

  // stores the API address - change this to whatever API the exam gives you
  private _url = 'https://jsonplaceholder.typicode.com/users';


  // injects HttpClient so we can make HTTP requests
  // always write this exactly the same
  constructor(private _http: HttpClient) {}

  // method that gets data from the API
  // name changes depending on exam e.g. getCompanies(), getMovies()
  // IUser[] changes to match your interface e.g. ICompanyDetails[]
  getUsers(): Observable<IUser[]> {
    return this._http.get<IUser[]>(this._url).pipe(
            // catchError catches any errors and sends them to handleError
      catchError(this.handleError)
    );
  }

  // receives the error and throws it so the component can display it
  handleError(error: HttpErrorResponse) {
    return throwError(() => error);
  }
}