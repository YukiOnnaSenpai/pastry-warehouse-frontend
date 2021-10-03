import { TestBed } from '@angular/core/testing';

import { ProductEmployeeService } from './product-employee.service';

describe('ProductEmployeeService', () => {
  let service: ProductEmployeeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductEmployeeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
