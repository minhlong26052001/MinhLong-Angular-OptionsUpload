import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { catchError, retry, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ExampleService {

  constructor(private _http: HttpClient) { }

  readonly api_url = 'http://localhost:3000'

  
  uploadData(data: any){
    return this._http.post(`${this.api_url}/upload`,data).pipe(
      retry(2),
      catchError(this.handleError)
    )
  }

  getAllProducts(){
    return this._http.get(`${this.api_url}/products`).pipe(
      retry(2),
      catchError(this.handleError)
    )
  }
  
  handleError(err:HttpErrorResponse){
    return throwError(()=>new Error(err.message))
  }

}
