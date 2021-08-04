// Core
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CountryTableDisplayComponent } from "./country-table-display.component";
import { MappedData } from "../../models/models";

describe('CountryTableDisplayComponent', () => {
  let component: CountryTableDisplayComponent;
  let fixture: ComponentFixture<CountryTableDisplayComponent>;
  let mockData: MappedData;

  mockData = {
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
    };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [],
      declarations: [],
      providers: []
    }).compileComponents();

    fixture = TestBed.createComponent(CountryTableDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    TestBed.compileComponents();
  });

  describe('setup and title check', () => {
    it('should create the component', () => {
      component.data = mockData;
      expect(component).toBeTruthy();
    });
  });
});
