import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { BehaviorSubject, Observable } from "rxjs";
import { environment } from '../../../environments/environment';
import { Equipment } from 'src/app/models/equipment';

@Injectable({
  providedIn: 'root'
})
export class EquipmentService {

  private readonly API_URL = environment.API_URL + 'equipment/';
  dataChange: BehaviorSubject<Equipment[]> = new BehaviorSubject<Equipment[]>([]);

  constructor(private httpClient: HttpClient) { }

  
  public getAllEquipment(): Observable<Equipment[]> {
    this.httpClient.get<Equipment[]>(this.API_URL).subscribe(data => {
      this.dataChange.next(data);
    },
      (error: HttpErrorResponse) => {
        console.log(error.name + ' ' + error.message);
      });
    return this.dataChange.asObservable();
  }
  
}
