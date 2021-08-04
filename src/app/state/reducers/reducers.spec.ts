import * as myActions from "../actions/actions";
import * as myReducer from "./reducers";

import { mockMappedAsianCountryData, mockMappedEuropeanCountryData, initialState } from "../../../mockData/mock-data";

describe('Reducers index', () => {

  describe('actions', () => {

    it('should return the default state', () => {
      const expected = initialState;
      const result = myReducer.reducer(undefined, {} as any);

      expect(result).toEqual(expected);
    });

    it('should return updated state from SelectedRegion action', () => {
      const expected = {
        selectedRegion: { name: 'Europe' },
        selectedCountry: { name: '' },
        europeanCountries: [],
        asianCountries: []
      };
      const action = myActions.SelectedRegion({ regionName: 'Europe' });
      const state = myReducer.reducer(initialState, action);

      expect(state.selectedRegion).toEqual(expected.selectedRegion);
    });

    it('should return updated state from AvailableEuropeanCountries action', () => {
      const expected = {
        selectedRegion: { name: 'Europe' },
        selectedCountry: { name: 'Sweden' },
        europeanCountries: mockMappedEuropeanCountryData,
        asianCountries: []
      };
      const action = myActions.AvailableEuropeanCountries({ countries: mockMappedEuropeanCountryData });
      const state = myReducer.reducer(initialState, action);

      expect(state.europeanCountries).toEqual(expected.europeanCountries);
    });

    it('should return updated state from SelectedCountry action', () => {
      const expected = {
        selectedRegion: { name: 'Europe' },
        selectedCountry: { name: 'Sweden' },
        europeanCountries: [],
        asianCountries: []
      };
      const action = myActions.SelectedCountry({ countryName: 'Sweden' });
      const state = myReducer.reducer(initialState, action);

      expect(state.selectedCountry).toEqual(expected.selectedCountry);
    });

    it('should return updated state from AvailableAsianCountries action', () => {
      const expected = {
        selectedRegion: { name: 'Asia' },
        selectedCountry: { name: 'China' },
        europeanCountries: [],
        asianCountries: mockMappedAsianCountryData
      };
      const action = myActions.AvailableAsianCountries({ countries: mockMappedAsianCountryData });
      const state = myReducer.reducer(initialState, action);

      expect(state.asianCountries).toEqual(expected.asianCountries);
    });
  });
});
