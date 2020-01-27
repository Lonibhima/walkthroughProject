import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';

import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class FormDataService {
  
  formData = new User();
  url: string = 'https://teqstories.com/tscrm/enquiry';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    }),
    responseType: 'text' as 'json'
  };

  constructor(private http: HttpClient) { }
  postUser(formData: User): Observable<User> {
    return this.http.post<User>(this.url, formData, this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  handleError(err: HttpErrorResponse) {
    return throwError(err.message || "server error")
  }

}
