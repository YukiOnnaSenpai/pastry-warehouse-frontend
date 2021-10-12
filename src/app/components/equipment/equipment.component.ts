import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { EquipmentDialogComponent } from 'src/app/dialogs/equipment-dialog/equipment-dialog.component';
import { Equipment } from 'src/app/models/equipment';
import { EquipmentService } from 'src/app/services/equipment/equipment.service';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {
  displayedColumns = ['id', 'warranty', 'maintainedStatus', 'dateAdded', 'validFrom', 'validTo', 'name', 'stockQuantity', 'measurementUnit', 'actions'];
  dataSource: MatTableDataSource<Equipment> | any;

  constructor(public equipmentService: EquipmentService, public dialog: MatDialog) { }

  @ViewChild(MatPaginator) paginator: MatPaginator | any;
  @ViewChild(MatSort) sort: MatSort | any;

  ngOnInit(): void {
    this.loadData();
  }

  public loadData() {
    this.equipmentService.getAllEquipment().subscribe(data => {
      this.dataSource = new MatTableDataSource(data)
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  public openDialog(flag: number, id: number, warranty: string, 
    maintainedStatus: string,
    dateAdded: string, validFrom: string, validTo: string,
    name: string, stockQuantity: number,
    measurementUnit: string) {
    const dialogRef = this.dialog.open(EquipmentDialogComponent, {
      data: {
        warranty: warranty, maintainedStatus: maintainedStatus,
         supply: {
          id: id,
          dateAdded: dateAdded,
          validFrom: validFrom,
          validTo: validTo, name: name,
          stockQuantity: stockQuantity, measurementUnit: measurementUnit
        } 
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
