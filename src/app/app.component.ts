import { Component, NgIterable, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as _ from 'lodash';
import { environment } from '../environments/environment';
import { DataService } from './services/data.service';
import { Currencies, InitialData, MappedData } from './models/models';
import {
  AvailableEuropeanCountries,
  AvailableAsianCountries,
  SelectedCountry,
  SelectedRegion } from './state/actions/actions';

import states from '../data/states.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnDestroy {
  countryCurrencies: Array<Currencies> | NgIterable<any> | undefined;

  title = 'Deutsche Bank Tech Test';
  logo: string;
  makeActive!: boolean;
  dataTableDisplay!: boolean;
  viewBtn!: boolean;
  regionData!: MappedData[];
  selectedData: MappedData | undefined;
  states: InitialData[];

  // Store Observables
  regionSelect$: Observable<InitialData>;
  countryList$: Observable<any>;

  constructor(private dataService: DataService,
              private $store: Store<any>) {
    this.logo = environment.logo;
    this.states = _.cloneDeep(states);

    this.regionSelect$ = this.$store.select(s => s.deutsche_bank.selectedRegion);
    this.countryList$ = this.$store.select(s => s.deutsche_bank.europeanCountries);
  }

  getRegionData(regionName: string) {

    this.dataService.getCountryRegionData(regionName).subscribe(regionData => {
      if (regionData.length > 0) {
        this.regionData = regionData.map(obj => ({
          name: obj.name,
          capital: obj.capital,
          population: obj.population,
          currencies: obj.currencies,
          flag: obj.flag,
        }));
        if (regionName === 'Europe') {
          this.$store.dispatch(
            AvailableEuropeanCountries({ countries: this.regionData })
          );
        } else {
          this.$store.dispatch(
            AvailableAsianCountries({ countries: this.regionData })
          );
        }
        this.makeActive = true;
      }
    });
  }

  emittedData(eventData: any) {
    if (eventData.target.id === 'regionSelect') {

      this.regionSelect$.subscribe(region => {
        if (region.name !== eventData.target.value) {
          this.dataTableDisplay = false;
          this.selectedData = undefined;
          this.makeActive = false;

          setTimeout(() => {
            this.$store.dispatch(SelectedRegion({ regionName: eventData.target.value }));
            this.getRegionData(eventData.target.value);
          }, 250);
        }
      });

    } else {
      if (this.dataTableDisplay) { this.dataTableDisplay = false; }
      this.selectedData = _.find(this.regionData, { name: eventData.target.value });
      this.$store.dispatch(SelectedCountry({ countryName: eventData.target.value }));
      this.dataTableDisplay ? this.viewBtn = false : this.viewBtn = true;
    }
  }

  showDataTable() {
    this.dataTableDisplay = true;
  }

  ngOnDestroy() {}
}
