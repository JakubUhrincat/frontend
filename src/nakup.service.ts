import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Nakup, NakupList} from "./app/models/nakup.model";

@Injectable({
  providedIn: 'root'
})
export class NakupService {

  constructor(private http: HttpClient) { }

  private apiUrl = 'http://localhost:8080/api/nakupy';


  getNakupy(): Observable<NakupList[]>{
    return this.http.get<NakupList[]>(`${this.apiUrl}`);
  }

  getNakup(nakupId: number): Observable<Nakup>{
    return this.http.get<Nakup>(`${this.apiUrl}/${nakupId}`);
  }

  createNakup(nakup: Nakup): Observable<Nakup>{
    return this.http.post<Nakup>(`${this.apiUrl}`, nakup);
  }

  updateNakup(nakupId?: number, nakup?: Nakup): Observable<Nakup>{
    return this.http.put<Nakup>(`${this.apiUrl}/${nakupId}`, nakup);
  }

  deleteNakup(nakupId?: number): Observable<void>{
    return this.http.delete<void>(`${this.apiUrl}/${nakupId}`);
  }
}
