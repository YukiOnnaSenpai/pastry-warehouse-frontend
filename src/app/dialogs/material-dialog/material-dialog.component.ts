import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BehaviorSubject, Observable } from 'rxjs';
import { Material } from 'src/app/models/material';
import { Supply } from 'src/app/models/supply';
import { MaterialService } from 'src/app/services/material/material.service';
import { SupplyService } from 'src/app/services/supply/supply.service';

@Component({
  selector: 'app-material-dialog',
  templateUrl: './material-dialog.component.html',
  styleUrls: ['./material-dialog.component.css']
})
export class MaterialDialogComponent implements OnInit {

  public flag: number | any;
  
  constructor(public snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<MaterialDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Material,
    public materialService: MaterialService,
    public supplyService: SupplyService) { }

  ngOnInit(): void {
    if (this.flag === 1) {
      this.data = new Material();
      this.data.supply = new Supply();
    }
  }


  public async add(): Promise<void> {
    this.data.id = -1;
    this.materialService.addMaterial(this.data);
    this.snackBar.open("Uspešno dodat materijal: " + this.data.id, "U redu", { duration: 2500 });
  }

  public update(): void {
    this.materialService.updateMaterial(this.data);
    this.snackBar.open("Uspešno modifikovan materijal: " + this.data.supply.id, "U redu", { duration: 2500 });
  }

  public delete(): void {
    this.materialService.deleteMaterial(this.data.supply.id);
    this.snackBar.open("Uspešno obrisan materijal: " + this.data.supply.id, "U redu", { duration: 2500 });
  }

  public cancel(): void {
    this.dialogRef.close();
    this.snackBar.open("Odustali ste!", "U redu", { duration: 1000 });
  }

}
