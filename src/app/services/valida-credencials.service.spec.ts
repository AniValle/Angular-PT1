import { TestBed } from '@angular/core/testing';
import { ValidaCredencialsService } from './valida-credencials.service';

describe('ValidaCredencialsService', () => {
  let service: ValidaCredencialsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ValidaCredencialsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
