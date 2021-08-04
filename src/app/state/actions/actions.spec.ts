import * as myActions from "../actions/actions";

describe('Actions', () => {
  it('should create SelectedRegion action', () => {
    const action = myActions.SelectedRegion({ regionName: 'Europe' });

    expect({ ...action }).toEqual({
      regionName: 'Europe',
      type: '[Selected Region]'
    });
  });

  it('should create SelectedCountry action', () => {
    const action = myActions.SelectedCountry({ countryName: 'Sweden' });

    expect({ ...action }).toEqual({
      countryName: 'Sweden',
      type: '[Selected Country]'
    });
  });

  it('should create AvailableEuropeanCountries action', () => {
    const mappedEuropeanCountryData = [
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
    const action = myActions.AvailableEuropeanCountries({ countries: mappedEuropeanCountryData });

    expect({ ...action }).toEqual({
      countries: mappedEuropeanCountryData,
      type: '[Available European Countries]'
    });
  });

  it('should create AvailableAsianCountries action', () => {
    const mappedAsianCountryData = [
      {
        name: 'China',
        capital: 'Beijing',
        population: 1377422166,
        currencies: [
          {
            code: 'CNY',
            name: 'Chinese yuan',
            symbol: '¥',
          }
        ],
        flag: 'https://restcountries.eu/data/chn.svg'
      },
      {
        name: 'India',
        capital: 'New Delhi',
        population:1295210000,
        currencies: [
          {
            code: 'INR',
            name: 'Indian rupee',
            symbol: '₹',
          }
        ],
        flag: 'https://restcountries.eu/data/ind.svg'
      },
    ];
    const action = myActions.AvailableAsianCountries({ countries: mappedAsianCountryData });

    expect({ ...action }).toEqual({
      countries: mappedAsianCountryData,
      type: '[Available Asian Countries]'
    });
  });
});


