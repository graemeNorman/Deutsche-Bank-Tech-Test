// Core
import { State } from '../../models/models';
import { Action, createReducer, on } from "@ngrx/store";
// Other
import * as MyActions from '../actions/actions';
import { initialState } from "../../../mockData/mock-data";

const deutscheBankReducer = createReducer(
  initialState,
  on(MyActions.SelectedRegion, (
    state, { regionName }) => (
      { ...state, selectedRegion: { name: regionName } }
    )
  ),
  on(MyActions.SelectedCountry, (
    state, { countryName }) => (
      { ...state, selectedCountry: { name: countryName } }
    )
  ),
  on(MyActions.AvailableEuropeanCountries, (
    state, { countries }) => (
      { ...state, europeanCountries: countries }
    )
  ),
  on(MyActions.AvailableAsianCountries, (
    state, { countries }) => (
      { ...state, asianCountries: countries }
      )
  )
);

export function reducer(state: State | undefined, action: Action) {
  return deutscheBankReducer(state, action);
}
