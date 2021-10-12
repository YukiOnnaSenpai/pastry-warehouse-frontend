import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { BehaviorSubject, Observable } from "rxjs";
import { environment } from '../../../environments/environment';
import { Supply } from 'src/app/models/supply';

@Injectable({
  providedIn: 'root'
})
export class SupplyService {

  private readonly API_URL = environment.API_URL + 'supply';

  dataChange: BehaviorSubject<Supply[]> = new BehaviorSubject<Supply[]>([]);
  newSupply: BehaviorSubject<Supply> = new BehaviorSubject<Supply>(new Supply());

  constructor(private httpClient: HttpClient) { }

  public getAllSupplies(): Observable<Supply[]> {
    this.httpClient.get<Supply[]>(this.API_URL).subscribe(data => {
      this.dataChange.next(data);
    },
      (error: HttpErrorResponse) => {
        console.log(error.name + ' ' + error.message);
      });
    return this.dataChange.asObservable();
  }

  public addSupply(supply: Supply): Observable<Supply> {
    this.httpClient.post<Supply>(this.API_URL, supply).subscribe(data => {
      this.newSupply.next(data);
    });
     return this.newSupply.asObservable();
    
  }

  public updateSupply(supply: Supply): void {
    this.httpClient.put(this.API_URL + supply.id, supply).subscribe();
  }

  public deleteSupply(id: number): void {
    this.httpClient.delete(this.API_URL + id).subscribe();
  }
}
