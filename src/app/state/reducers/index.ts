import { State } from '../../models/models';
import { Action, createReducer, on } from "@ngrx/store";
import * as MyActions from '../actions/actions';

export const initialState: State = {
  selectedRegion: { name: '' },
  selectedCountry: { name: '' },
  europeanCountries: [],
  asianCountries: []
};

const deutscheBankReducer = createReducer(
  initialState,
  on(MyActions.SelectedRegion, state => ({ ...state })),
  on(MyActions.SelectedCountry, state => ({ ...state })),
  on(MyActions.AvailableCountries, state => ({ ...state }))
);

export function reducer(state: State | undefined, action: Action) {
  return deutscheBankReducer(state, action);
}
