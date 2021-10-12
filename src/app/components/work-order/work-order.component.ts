import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ProductEmployee } from 'src/app/models/product-employee';
import { WorkOrder } from 'src/app/models/work-order';
import { ProductEmployeeService } from 'src/app/services/product-employee/product-employee.service';
import { WorkOrderService } from 'src/app/services/work-order/work-order.service';

@Component({
  selector: 'app-work-order',
  templateUrl: './work-order.component.html',
  styleUrls: ['./work-order.component.css']
})
export class WorkOrderComponent implements OnInit {
  currentDate = new Date();
  employeeData: Array<ProductEmployee> = [];
  workOrderData: WorkOrder = <WorkOrder>{};

  constructor(
    public snackBar: MatSnackBar,
    public productEmployeeService: ProductEmployeeService,
    public workOrderService: WorkOrderService) { }

  ngOnInit(): void {
    this.loadData();
  }

  public loadData() {
    this.productEmployeeService.getAllProductEmployees().subscribe(data => {
      this.employeeData = data;
    });
  }

  public add(): void {
    this.checkDate();
    console.log(this.workOrderData);
    this.workOrderService.addWorkOrder(this.workOrderData);
    this.snackBar.open("Uspešno dodat radni nalog: " + this.workOrderData.id, "U redu", { duration: 2500 });
  }

  dateRange = new FormGroup({
    start: new FormControl(),
    end: new FormControl()
  });

  checkDate() {
    this.workOrderData.dateCreated = this.currentDate;
    // this.workOrderData.validFrom = new DatePipe('en-US').transform(this.workOrderData.validFrom, 'MM/dd/yyyy');
    // this.workOrderData.validTo = new DatePipe('en-US').transform(this.workOrderData.validTo, 'MM/dd/yyyy');
  }

}
