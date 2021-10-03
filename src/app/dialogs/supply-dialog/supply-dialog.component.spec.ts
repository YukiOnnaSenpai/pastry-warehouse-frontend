import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplyDialogComponent } from './supply-dialog.component';

describe('SupplyDialogComponent', () => {
  let component: SupplyDialogComponent;
  let fixture: ComponentFixture<SupplyDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupplyDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SupplyDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
