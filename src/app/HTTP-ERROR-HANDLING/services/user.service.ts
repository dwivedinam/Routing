import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

// import 'rxjs/add/observable/throw';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  getAllUsers() {
    return this.http.get('https://jsonplaceholder.typicode.com/users')
      .pipe(catchError(this.handleError));
  }
  public handleError(error: any) {

    let errorMessage = 'csdsdvsdvds';
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
     errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side errors
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);


  }

}
