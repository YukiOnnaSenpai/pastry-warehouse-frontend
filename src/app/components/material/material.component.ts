import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MaterialDialogComponent } from 'src/app/dialogs/material-dialog/material-dialog.component';
import { Material } from 'src/app/models/material';
import { MaterialService } from 'src/app/services/material/material.service';

@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.css']
})
export class MaterialComponent implements OnInit {
  displayedColumns = ['id', 'materialType', 'dateAdded', 'validFrom', 'validTo', 'name', 'stockQuantity', 'measurementUnit', 'actions'];
  dataSource: MatTableDataSource<Material>;

  constructor(public materialService: MaterialService, public dialog: MatDialog) { }

  
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngOnInit(): void {
    this.loadData();
  }

  public loadData() {
    this.materialService.getAllMaterials().subscribe(data => {
      this.dataSource = new MatTableDataSource(data)
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  public openDialog(flag: number, id: number, materialType: string,
    dateAdded: string, validFrom: string, validTo: string,
    name: string, stockQuantity: number,
    measurementUnit: string) {
      console.log(flag);
    const dialogRef = this.dialog.open(MaterialDialogComponent, {
      data: {
        id: id, materialType: materialType, validFrom: validFrom,
        validTo: validTo, dateAdded: dateAdded, name: name,
        stockQuantity: stockQuantity, measurementUnit: measurementUnit
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
