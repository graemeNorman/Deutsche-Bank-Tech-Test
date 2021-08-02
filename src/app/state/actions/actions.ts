import { createAction, props } from '@ngrx/store';

export const SelectedRegion = createAction(
  '[Selected Region]',
  props<{ name: any }>()
);

export const SelectedCountry = createAction(
  '[Selected Country]',
  props<{ name: any }>()
);

export const AvailableCountries = createAction(
  '[Available Countries]',
  props<{ region: any, countries: any }>()
);
