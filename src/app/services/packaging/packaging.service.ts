import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { BehaviorSubject, Observable } from "rxjs";
import { environment } from '../../../environments/environment';
import { PackagingSupply } from 'src/app/models/packaging-supply';

@Injectable({
  providedIn: 'root'
})
export class PackagingService {

  private readonly API_URL = environment.API_URL + 'packaging/';
  dataChange: BehaviorSubject<PackagingSupply[]> = new BehaviorSubject<PackagingSupply[]>([]);

  constructor(private httpClient: HttpClient) { }

  
  public getAllPackaging(): Observable<PackagingSupply[]> {
    this.httpClient.get<PackagingSupply[]>(this.API_URL).subscribe(data => {
      this.dataChange.next(data);
    },
      (error: HttpErrorResponse) => {
        console.log(error.name + ' ' + error.message);
      });
    return this.dataChange.asObservable();
  }

  public addPackaging(packaging: PackagingSupply): void {
    this.httpClient.post(this.API_URL, packaging).subscribe();
  }

  public updatePackaging(packaging: PackagingSupply): void {
    this.httpClient.put(this.API_URL + packaging.id, packaging).subscribe();
  }

  public deletePackaging(id: number): void {
    this.httpClient.delete(this.API_URL + id).subscribe();
  }
  
}
