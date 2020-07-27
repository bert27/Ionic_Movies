import { TestBed } from '@angular/core/testing';

import { GetPeliculasService } from './get-peliculas.service';

describe('GetPeliculasService', () => {
  let service: GetPeliculasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetPeliculasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
