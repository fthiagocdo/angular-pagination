import { TestBed } from '@angular/core/testing';

import { JavatechCovid19Service } from './javatech-covid19.service';

describe('JavatechCovid19Service', () => {
  let service: JavatechCovid19Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JavatechCovid19Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
