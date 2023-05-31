import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  //Aux Fun
  arrayRange(start: number, stop: number, step: number) {
    Array.from(
    { length: (stop - start) / step + 1 },
    (value, index) => start + index * step
    );}

  constructor(private http: HttpClient) { }

  getAllCharacters(URL: string){
    
    return this.http.get(URL);
  }

  getTotalCharacters(URL: string){
    return this.http.get(URL)
  }

  getCharactersRange(URL: string, rango: number[]){
    return this.http.get(URL+rango)
  }
}
