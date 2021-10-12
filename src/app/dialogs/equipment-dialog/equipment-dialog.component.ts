import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Equipment } from 'src/app/models/equipment';
import { Material } from 'src/app/models/material';
import { Supply } from 'src/app/models/supply';
import { EquipmentService } from 'src/app/services/equipment/equipment.service';
import { SupplyService } from 'src/app/services/supply/supply.service';

@Component({
  selector: 'app-equipment-dialog',
  templateUrl: './equipment-dialog.component.html',
  styleUrls: ['./equipment-dialog.component.css']
})
export class EquipmentDialogComponent implements OnInit {

  public flag: number | any;
  
  constructor(public snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<EquipmentDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Equipment,
    public equipmentService: EquipmentService,
    public supplyService: SupplyService) { }

  ngOnInit(): void {
    if (this.flag === 1) {
      this.data = new Equipment();
      this.data.supply = new Supply();
    }
  }


  public async add(): Promise<void> {
    this.data.id = -1;
    this.equipmentService.addEquipment(this.data);
    this.snackBar.open("Uspešno dodata oprema: " + this.data.supply.name, "U redu", { duration: 2500 });
  }

  public update(): void {
    this.equipmentService.updateEquipment(this.data);
    this.snackBar.open("Uspešno modifikovana oprema: " + this.data.supply.id, "U redu", { duration: 2500 });
  }

  public delete(): void {
    this.equipmentService.deleteEquipment(this.data.supply.id);
    this.snackBar.open("Uspešno obrisana oprema: " + this.data.supply.id, "U redu", { duration: 2500 });
  }

  public cancel(): void {
    this.dialogRef.close();
    this.snackBar.open("Odustali ste!", "U redu", { duration: 1000 });
  }

}
