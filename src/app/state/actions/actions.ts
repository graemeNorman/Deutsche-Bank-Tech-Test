import { createAction, props } from '@ngrx/store';
import { MappedData } from "../../models/models";

export const SelectedRegion = createAction(
  '[Selected Region]',
  props<{ regionName: string }>()
);

export const SelectedCountry = createAction(
  '[Selected Country]',
  props<{ countryName: string }>()
);

export const AvailableEuropeanCountries = createAction(
  '[Available European Countries]',
  props<{ countries: MappedData[] }>()
);

export const AvailableAsianCountries = createAction(
  '[Available Asian Countries]',
  props<{ countries: MappedData[] }>()
);
