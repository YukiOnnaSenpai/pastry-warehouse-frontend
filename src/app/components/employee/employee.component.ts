import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ProductEmployeeDialogComponent } from 'src/app/dialogs/product-employee-dialog/product-employee-dialog.component';
import { ProductEmployee } from 'src/app/models/product-employee';
import { ProductEmployeeService } from 'src/app/services/product-employee/product-employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  displayedColumns = ['id', 'firstName', 'lastName', 'phoneNumber', 'personalId', 'bankAccountNumber', 'salary', 'shiftType', 'shiftDuration', 'workplace', 'qualifications', 'actions'];
  dataSource: MatTableDataSource<ProductEmployee>;

  constructor(public productEmployeeService: ProductEmployeeService, public dialog: MatDialog) { }

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngOnInit(): void {
    this.loadData();
  }

  public loadData() {
    this.productEmployeeService.getAllProductEmployees().subscribe(data => {
      this.dataSource = new MatTableDataSource(data)
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  public openDialog(flag: number, id: number, firstName: string,
    lastName: string, personalId: string, phoneNumber: string,
    bankAccountNumber: string, qualifications: string, salary: number,
    shiftType: string, shiftDuration: number, workplace: string) {
    const dialogRef = this.dialog.open(ProductEmployeeDialogComponent, {
      data: {
        id: id, firstName: firstName, lastName: lastName,
        personalId: personalId, phoneNumber: phoneNumber, bankAccountNumber: bankAccountNumber,
        qualifications: qualifications, salary: salary, shiftType: shiftType, shiftDuration: shiftDuration,
        workplace: workplace
      }
    });
    dialogRef.componentInstance.flag = flag;
    dialogRef.afterClosed().subscribe(result => {
      if (result == 1) {
        this.loadData();
      }
    });
  }

}
