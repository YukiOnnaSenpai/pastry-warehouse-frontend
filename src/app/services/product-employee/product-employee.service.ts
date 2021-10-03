import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { BehaviorSubject, Observable } from "rxjs";
import { environment } from '../../../environments/environment';
import { ProductEmployee } from 'src/app/models/product-employee';

@Injectable({
  providedIn: 'root'
})
export class ProductEmployeeService {

  private readonly API_URL = environment.API_URL + 'productEmployee/';

  dataChange: BehaviorSubject<ProductEmployee[]> = new BehaviorSubject<ProductEmployee[]>([]);

  constructor(private httpClient: HttpClient) { }

  public getAllProductEmployees(): Observable<ProductEmployee[]> {
    this.httpClient.get<ProductEmployee[]>(this.API_URL).subscribe(data => {
      this.dataChange.next(data);
    },
      (error: HttpErrorResponse) => {
        console.log(error.name + ' ' + error.message);
      });
    return this.dataChange.asObservable();
  }

  public addProductEmployee(productEmployee: ProductEmployee): void {
    this.httpClient.post(this.API_URL, productEmployee).subscribe();
  }

  public updateProductEmployee(productEmployee: ProductEmployee): void {
    this.httpClient.put(this.API_URL + productEmployee.id, productEmployee).subscribe();
  }

  public deleteProductEmployee(id: number): void {
    this.httpClient.delete(this.API_URL + id).subscribe();
  }
}
