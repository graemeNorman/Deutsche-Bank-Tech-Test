// Core
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';
import { delay } from "rxjs/operators";
// Imports
import { AppComponent } from './app.component';
import { RegionCountryComponent } from './components/region-country/region-country.component';
import { CountryTableDisplayComponent } from './components/country-table-display/country-table-display.component';
// Providers
import { DataService } from './services/data.service';
// Other
import { MappedData } from "./models/models";
import {
  mockRegionData,
  mockEventDataRegion,
  initialState } from "../mockData/mock-data";

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let countryMappedData: MappedData[];
  let store: MockStore;
  let service: DataService;
  let viewBtn: boolean;
  let dataTableDisplay: boolean;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule
      ],
      declarations: [
        AppComponent,
        RegionCountryComponent,
        CountryTableDisplayComponent
      ],
      providers: [
        { provide: DataService },
        provideMockStore({ initialState }),
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    store = TestBed.inject(MockStore);
    service = TestBed.inject(DataService);
    TestBed.compileComponents();
  });

  describe('setup and title check', () => {
    it('should create the app', () => {
      expect(component).toBeTruthy();
    });

    it(`should have as title 'deutsche-bank'`, () => {
      expect(component.title).toEqual('Deutsche Bank Tech Test');
    });
  });

  describe('onChange', () => {
    beforeEach(() => {
      const select: HTMLSelectElement = fixture.debugElement.query(By.css('#regionSelect')).nativeElement;
      select.value = select.options[2].value;
      spyOn(component, 'onChange').withArgs(mockEventDataRegion);
      spyOn(component, 'getRegionData').withArgs(mockEventDataRegion.target.value);

      select.dispatchEvent(new Event('change'));
      component.onChange(mockEventDataRegion);
      fixture.detectChanges();
    });

    it('should call onChange method when select value changes onChange', () => {
      expect(component.onChange).toHaveBeenCalledWith(mockEventDataRegion);
    });

    it('should get regionData based on selected value', () => {
      if (mockEventDataRegion.target.id === 'regionSelect') {
        setTimeout(() => {
          expect(component.getRegionData).toHaveBeenCalledWith(mockEventDataRegion.target.value);
        }, 250);
      }
    });

    it('should display Country Load button onChange of region select', () => {
      dataTableDisplay = false;
      viewBtn = false;
      if (mockEventDataRegion.target.id !== 'regionSelect') {
        dataTableDisplay ? viewBtn = false : viewBtn = true;
        tick(250);
        expect(viewBtn).toBe(true);
      }
    });
  });

  describe('getCountryRegionData', () => {
    beforeEach(() => {
      countryMappedData = [
        {
          name: 'Sweden',
          capital: 'Stockholm',
          population: 9894888,
          currencies: [
            {
              code: 'SEK',
              name: 'Swedish krona',
              symbol: 'kr'
            }
          ],
          flag: 'https://restcountries.eu/data/swe.svg',
        },
        {
          name: 'Switzerland',
          capital: 'Bern',
          population: 8341600,
          currencies: [
            {
              code: 'CHF',
              name: 'Swiss franc',
              symbol: 'Fr'
            }
          ],
          flag: 'https://restcountries.eu/data/che.svg',
        },
      ];
    });

    it('should call getCountryRegionData and get response as a mapped array', fakeAsync(() => {
      spyOn(service,'getCountryRegionData').and.callFake(() => {
        return of(mockRegionData).pipe(delay(100));
      });
      component.getRegionData('Europe');
      tick(250);
      expect(component.regionData).toEqual(countryMappedData);
    }));
  });
});
