import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { BehaviorSubject, Observable } from "rxjs";
import { environment } from '../../../environments/environment';
import { Material } from 'src/app/models/material';

@Injectable({
  providedIn: 'root'
})
export class MaterialService {

  private readonly API_URL = environment.API_URL + 'material/';
  dataChange: BehaviorSubject<Material[]> = new BehaviorSubject<Material[]>([]);

  constructor(private httpClient: HttpClient) { }

  
  public getAllMaterials(): Observable<Material[]> {
    this.httpClient.get<Material[]>(this.API_URL).subscribe(data => {
      this.dataChange.next(data);
    },
      (error: HttpErrorResponse) => {
        console.log(error.name + ' ' + error.message);
      });
    return this.dataChange.asObservable();
  }

  public addMaterial(material: Material): void {
    this.httpClient.post(this.API_URL, material).subscribe();
  }

  public updateMaterial(material: Material): void {
    this.httpClient.put(this.API_URL + material.id, material).subscribe();
  }

  public deleteMaterial(id: number): void {
    this.httpClient.delete(this.API_URL + id).subscribe();
  }
  
}
