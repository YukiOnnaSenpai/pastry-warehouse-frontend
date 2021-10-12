import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from "rxjs";
import { environment } from '../../../environments/environment';
import { WorkOrder } from 'src/app/models/work-order';

@Injectable({
  providedIn: 'root'
})
export class WorkOrderService {

  private readonly API_URL = environment.API_URL + 'workOrder';

  dataChange: BehaviorSubject<WorkOrder[]> = new BehaviorSubject<WorkOrder[]>([]);

  constructor(private httpClient: HttpClient) { }

  public getAllWorkOrders(): Observable<WorkOrder[]> {
    this.httpClient.get<WorkOrder[]>(this.API_URL).subscribe(data => {
      this.dataChange.next(data);
    },
      (error: HttpErrorResponse) => {
        console.log(error.name + ' ' + error.message);
      });
    return this.dataChange.asObservable();
  }

  public addWorkOrder(workOrder: WorkOrder): void {
    this.httpClient.post(this.API_URL, workOrder).subscribe();
  }

  public updateWorkOrder(workOrder: WorkOrder): void {
    this.httpClient.put(this.API_URL + workOrder.id, workOrder).subscribe();
  }

  public deleteWorkOrder(id: number): void {
    this.httpClient.delete(this.API_URL + id).subscribe();
  }
}
