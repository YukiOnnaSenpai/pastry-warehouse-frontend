import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar'
import { MatDialogRef } from '@angular/material/dialog';
import { ProductEmployee } from 'src/app/models/product-employee';
import { MatSelectModule } from '@angular/material/select';
import { ProductEmployeeService } from 'src/app/services/product-employee/product-employee.service';
import { Shift } from 'src/app/models/shift';

@Component({
  selector: 'app-product-employee-dialog',
  templateUrl: './product-employee-dialog.component.html',
  styleUrls: ['./product-employee-dialog.component.css']
})
export class ProductEmployeeDialogComponent implements OnInit {

  public flag: number;

  shifts: Shift[] = [
    { value: '0', viewValue: 'Dnevna' },
    { value: '1', viewValue: 'Noćna' }
  ];

  constructor(public snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<ProductEmployeeDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ProductEmployee,
    public productEmployeeService: ProductEmployeeService) { }

  ngOnInit(): void {
  }

  public add(): void {
    this.data.id = -1;
    this.productEmployeeService.addProductEmployee(this.data);
    this.snackBar.open("Uspešno dodat zaposleni: " + this.data.firstName, "U redu", { duration: 2500 });
  }

  public update(): void {
    this.productEmployeeService.updateProductEmployee(this.data);
    this.snackBar.open("Uspešno modifikovan zaposleni: " + this.data.id, "U redu", { duration: 2500 });
  }

  public delete(): void {
    this.productEmployeeService.deleteProductEmployee(this.data.id);
    this.snackBar.open("Uspešno obrisan zaposleni: " + this.data.id, "U redu", { duration: 2500 });
  }

  public cancel(): void {
    this.dialogRef.close();
    this.snackBar.open("Odustali ste!", "U redu", { duration: 1000 });
  }

  compareObjects(o1: any, o2: any): boolean {
    return o1.name === o2.name && o1.id === o2.id;
  }

}
