import { Injectable } from '@angular/core';
import { Observable,throwError } from 'rxjs';
import { catchError,tap } from 'rxjs';
import { Flight } from './Flight';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { response } from 'express';
@Injectable({
  providedIn: 'root'
})
export class BooflightService {

  constructor(private http:HttpClient) { }

  getData():Observable<any>{
    return this.http.get('http://localhost:8080/flights');
  }

  postData(){
    const user = {
      id:11,
      name:'Harry Potter',
      email:'harry.potter@hogwards.com'
    }
    this.http.post('https://jsonplaceholder.typicode.com/users',user)
    .subscribe((response)=>{
      console.log('User Updated');
    })
  }
  getFlights(): Observable<Flight[]> {
    return this.http.get<Flight[]>('http://localhost:8080/flights').pipe(
      tap((data: any) => console.log('Data Fetched:' + JSON.stringify(data))),
      catchError(this.handleError));
    }

    private handleError(err: HttpErrorResponse): Observable<any> {
      let errMsg = '';
      if (err.error instanceof Error) {
        // A client-side or network error occurred. Handle it accordingly.
        console.log('An error occurred:', err.error.message);
        errMsg = err.error.message;
      } else {
        // The backend returned an unsuccessful response code.
        // The response body may contain clues as to what went wrong,
        console.log(`Backend returned code ${err.status}`);
        errMsg = err.error.status;
      }
      return throwError(()=>errMsg);
    }
}
