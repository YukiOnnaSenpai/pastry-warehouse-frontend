import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductEmployeeDialogComponent } from './product-employee-dialog.component';

describe('ProductEmployeeDialogComponent', () => {
  let component: ProductEmployeeDialogComponent;
  let fixture: ComponentFixture<ProductEmployeeDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductEmployeeDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductEmployeeDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
