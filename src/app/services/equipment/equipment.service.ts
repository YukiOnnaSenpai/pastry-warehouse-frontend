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

  public addEquipment(equipment: Equipment): number {
    var result = 0;
    this.httpClient.post<Equipment>(this.API_URL, equipment).subscribe(data => {
      result = data.id;
    });
    return result;
  }

  public updateEquipment(equipment: Equipment): void {
    this.httpClient.put(this.API_URL + equipment.supply.id, equipment).subscribe();
  }

  public deleteEquipment(id: number): void {
    this.httpClient.delete(this.API_URL + id).subscribe();
  }
  
}
