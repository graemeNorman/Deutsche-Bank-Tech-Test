export interface Region {
  name: string;
  topLevelDomain: [string];
  alpha2Code: string;
  alpha3Code: string;
  callingCodes: [string];
  capital: string;
  altSpellings: string[];
  region: string;
  subregion: string;
  population: number;
  latlng: number[];
  demonym: string;
  area: number;
  gini: any;
  timezones: [string];
  borders: any[];
  nativeName: string;
  numericCode: string;
  currencies: Currencies[];
  languages: any[];
  translations: {};
  flag: string;
  regionalBlocs: [any];
  cioc: string;
}

export interface Currencies {
  code: string;
  name: string;
  symbol: string;
}

export interface MappedData {
  name: string;
  capital: string;
  population: number;
  currencies: Currencies[];
  flag: string;
}

export interface InitialData {
  name: string;
}

export interface State {
  selectedRegion: InitialData;
  selectedCountry: InitialData;
  europeanCountries: MappedData[];
  asianCountries: MappedData[];
}
