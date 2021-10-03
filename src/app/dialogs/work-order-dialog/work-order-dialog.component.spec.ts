import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkOrderDialogComponent } from './work-order-dialog.component';

describe('WorkOrderDialogComponent', () => {
  let component: WorkOrderDialogComponent;
  let fixture: ComponentFixture<WorkOrderDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkOrderDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkOrderDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
