import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { InfoService } from './info.service';
import { InfoResponse } from '../../models/info.response';

describe('InfoService', () => {
  let service: InfoService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });

    service = TestBed.inject(InfoService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should make http call on getInfo call', (done) => {
    const data: InfoResponse = {
      textToDisplay: 'text from http',
    };

    service.getInfo().subscribe((results) => {
      expect(results).toEqual(data);
      done();
    });

    const req = httpMock.expectOne(`/api/infoText`);
    expect(req.request.method).toBe('GET');
    req.flush(data);
  });
});
