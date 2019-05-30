import { Injectable } from '@angular/core';
import {AuthenticateService} from './authenticate.service';
import {HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'observe': 'response',
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(private authenticateService: AuthenticateService, private http: HttpClient) { }

  postPatient(email: string, password: string, confirmPassword: string): Observable<HttpResponse<boolean>> {

    console.log('Creating user with: { email: ' + email + ', password: ' + password + ', confirmPassword: ' + confirmPassword);

    const body =  {
      email: email,
      password: password,
      confirmPassword: confirmPassword
    };

    console.log('request being made');

    return this.http.post<boolean>('http://localhost:3000/patient', body, {observe: 'response'}).pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error.toString()}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  }
}
