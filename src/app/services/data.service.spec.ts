// Core
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { HttpClient } from "@angular/common/http";
// Other
import { DataService } from './data.service';
import { Region } from "../models/models";
import { mockRegionData } from "../mockData/mock-data";

describe('DataService', () => {
  let service: DataService;
  let regionData: Region[];
  let httpMock: HttpTestingController;
  let httpClient: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [ DataService ]
    });

    service = TestBed.inject(DataService);
    httpMock = TestBed.inject(HttpTestingController);
    httpClient = TestBed.inject(HttpClient);
  });

  it('should be created', () => {
    const service: DataService = TestBed.inject(DataService);

    expect(service).toBeTruthy();
  });

  it('getCountryRegionData() should call http Get method for the given route', () => {
    regionData = mockRegionData;
    service.getCountryRegionData('Europe').subscribe((data: Region[])=>{
      expect(data).toEqual(regionData);
    });

    const req = httpMock.expectOne('https://restcountries.eu/rest/v2/region/Europe');

    expect(req.request.method).toEqual('GET');

    httpMock.verify();
  });
});
