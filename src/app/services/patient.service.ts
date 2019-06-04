import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse} from '@angular/common/http';
import {BehaviorSubject, Observable, throwError } from 'rxjs';
import {catchError} from 'rxjs/operators';
import {environment} from '../../environments/environment';
import {Patient} from '../models/patient';
import {CookieService} from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  private isLoggedInSubject = new BehaviorSubject<boolean>(false);
  public isLoggedInObserver = this.isLoggedInSubject.asObservable();

  constructor(
    private http:  HttpClient,
    private cookieService: CookieService
  ) { }

  postPatient(email: string, password: string, confirmPassword: string): Observable<HttpResponse<boolean>> {

    console.log('Creating user with: { email: ' + email + ', password: ' + password + ', confirmPassword: ' + confirmPassword);

    const body =  {
      email: email,
      password: password,
      confirmPassword: confirmPassword
    };

    return this.http.post<boolean>(
      environment.apiDomain + '/patient',
      body,
      {observe: 'response'}
      ).pipe(catchError(this.handleError));
  }

  getPatient(): Observable<HttpResponse<Patient>> {

    const headers = new HttpHeaders({
      'token': this.cookieService.get('token')
    });

    return this.http.get<Patient>(
      environment.apiDomain + '/secure-api/patient',
      {
        observe: 'response',
        headers: headers
        }
      ).pipe(catchError(this.handleError));
  }

  checkIsLoggedIn() {
    this.isLoggedInSubject.next(this.cookieService.get('token') !== '');
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
