import { TestBed } from '@angular/core/testing';
import { SesamienService } from './sesamien.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Sesamien } from './sesamien';
import { SESAMIENS_URL, SESAMIEN_BY_ID_URL, SESAMIEN_URL_ADD } from '../constants/endpoints';
import { SESAMIENS } from './mock-sesamien-list';

describe('SesamienService', () => {
  let service: SesamienService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [SesamienService]
    });
    service = TestBed.inject(SesamienService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify(); // Ensure no outstanding requests
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should retrieve a list of sesamiens', () => {
    const dummySesamiens: Sesamien[] = SESAMIENS;

    service.getSesamienList().subscribe(data => {
      expect(data.length).toBe(1);
      expect(data).toEqual(dummySesamiens);
    });

    const req = httpMock.expectOne(SESAMIENS_URL);
    expect(req.request.method).toBe('GET');
    req.flush(dummySesamiens);
  });

  it('should retrieve a sesamien by ID', () => {
    const dummySesamien: Sesamien = SESAMIENS[0];
    const id = "1";

    service.getSesamienById(id).subscribe(data => {
      expect(data).toEqual(dummySesamien);
    });

    const req = httpMock.expectOne(`${SESAMIEN_BY_ID_URL}${id}`);
    expect(req.request.method).toBe('GET');
    req.flush(dummySesamien);
  });

  it('should search sesamiens by name', () => {
    const dummySesamiens: Sesamien[] = SESAMIENS;
    const term = 'searchTerm';

    service.searchSesamienList(term).subscribe(data => {
      expect(data).toEqual(dummySesamiens);
    });

    const req = httpMock.expectOne(`api/sesamiens/?name=${term}`);
    expect(req.request.method).toBe('GET');
    req.flush(dummySesamiens);
  });

  it('should update a sesamien', () => {
    const dummySesamien: Sesamien = SESAMIENS[0];
    const id = "1";

    service.updateSesamien(id, dummySesamien).subscribe(data => {
      expect(data).toEqual(dummySesamien);
    });

    const req = httpMock.expectOne(`${SESAMIEN_BY_ID_URL}${id}`);
    expect(req.request.method).toBe('PUT');
    req.flush(dummySesamien);
  });

  it('should add a sesamien', () => {
    const dummySesamien: Sesamien = SESAMIENS[0];

    service.addSesamien(dummySesamien).subscribe(data => {
      expect(data).toEqual(dummySesamien);
    });

    const req = httpMock.expectOne(SESAMIEN_URL_ADD);
    expect(req.request.method).toBe('POST');
    req.flush(dummySesamien);
  });

  it('should delete a sesamien by ID', () => {
    const id = "1";

    service.deleteSesamienByID(id).subscribe(data => {
      expect(data).toBe(null);
    });

    const req = httpMock.expectOne(`api/sesamiens/${id}`);
    expect(req.request.method).toBe('DELETE');
    req.flush(null);
  });

  it('should handle HTTP errors', () => {
    const mockError = new ErrorEvent('mockError', {
      message: 'Error fetching data'
    });

    service.getSesamienList().subscribe({
      next: (data) => fail('Should have failed with the mock error'),
      error: (error) => expect(error.message).toEqual('Erreur simulée')
    });

    const req = httpMock.expectOne(SESAMIENS_URL);
    req.flush('Erreur simulée', { status: 400, statusText: 'Bad Request' });

  });
});
