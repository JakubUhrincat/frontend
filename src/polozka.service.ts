import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Polozka, PolozkaList} from "./app/models/polozka.model";

@Injectable({
  providedIn: 'root'
})
export class PolozkaService {

  constructor(private http: HttpClient) { }

  private apiUrl = 'http://localhost:8080/api/polozky';


  getPolozky(): Observable<PolozkaList[]>{
    return this.http.get<PolozkaList[]>(`${this.apiUrl}`);
  }

  getPolozka(polozkaId: number): Observable<Polozka>{
    return this.http.get<Polozka>(`${this.apiUrl}/${polozkaId}`);
  }

  createPolozka(polozka: Polozka): Observable<Polozka>{
    return this.http.post<Polozka>(`${this.apiUrl}`, polozka);
  }

  updatePolozka(polozkaId?: number, polozka?: Polozka): Observable<Polozka>{
    return this.http.put<Polozka>(`${this.apiUrl}/${polozkaId}`, polozka);
  }

  deletePolozka(polozkaId?: number): Observable<void>{
    return this.http.delete<void>(`${this.apiUrl}/${polozkaId}`);
  }
}
