import { MappedData, Region, State } from "../models/models";

/***
 * State
 */
export const initialState: State = {
  selectedRegion: { name: '' },
  selectedCountry: { name: '' },
  europeanCountries: [],
  asianCountries: []
};

/***
 * Mock data for spec files
 */
export const mockRegionData: Region[] = [
  {
    "name":"Sweden",
    "topLevelDomain":[
      ".se"
    ],
    "alpha2Code":"SE",
    "alpha3Code":"SWE",
    "callingCodes":[
      "46"
    ],
    "capital":"Stockholm",
    "altSpellings":[
      "SE",
      "Kingdom of Sweden",
      "Konungariket Sverige"
    ],
    "region":"Europe",
    "subregion":"Northern Europe",
    "population":9894888,
    "latlng":[
      62.0,
      15.0
    ],
    "demonym":"Swedish",
    "area":450295.0,
    "gini":25.0,
    "timezones":[
      "UTC+01:00"
    ],
    "borders":[
      "FIN",
      "NOR"
    ],
    "nativeName":"Sverige",
    "numericCode":"752",
    "currencies":[
      {
        "code":"SEK",
        "name":"Swedish krona",
        "symbol":"kr"
      }
    ],
    "languages":[
      {
        "iso639_1":"sv",
        "iso639_2":"swe",
        "name":"Swedish",
        "nativeName":"svenska"
      }
    ],
    "translations":{
      "de":"Schweden",
      "es":"Suecia",
      "fr":"Suède",
      "ja":"スウェーデン",
      "it":"Svezia",
      "br":"Suécia",
      "pt":"Suécia",
      "nl":"Zweden",
      "hr":"Švedska",
      "fa":"سوئد"
    },
    "flag":"https://restcountries.eu/data/swe.svg",
    "regionalBlocs":[
      {
        "acronym":"EU",
        "name":"European Union",
        "otherAcronyms":[

        ],
        "otherNames":[

        ]
      }
    ],
    "cioc":"SWE"
  },
  {
    "name":"Switzerland",
    "topLevelDomain":[
      ".ch"
    ],
    "alpha2Code":"CH",
    "alpha3Code":"CHE",
    "callingCodes":[
      "41"
    ],
    "capital":"Bern",
    "altSpellings":[
      "CH",
      "Swiss Confederation",
      "Schweiz",
      "Suisse",
      "Svizzera",
      "Svizra"
    ],
    "region":"Europe",
    "subregion":"Western Europe",
    "population":8341600,
    "latlng":[
      47.0,
      8.0
    ],
    "demonym":"Swiss",
    "area":41284.0,
    "gini":33.7,
    "timezones":[
      "UTC+01:00"
    ],
    "borders":[
      "AUT",
      "FRA",
      "ITA",
      "LIE",
      "DEU"
    ],
    "nativeName":"Schweiz",
    "numericCode":"756",
    "currencies":[
      {
        "code":"CHF",
        "name":"Swiss franc",
        "symbol":"Fr"
      }
    ],
    "languages":[
      {
        "iso639_1":"de",
        "iso639_2":"deu",
        "name":"German",
        "nativeName":"Deutsch"
      },
      {
        "iso639_1":"fr",
        "iso639_2":"fra",
        "name":"French",
        "nativeName":"français"
      },
      {
        "iso639_1":"it",
        "iso639_2":"ita",
        "name":"Italian",
        "nativeName":"Italiano"
      }
    ],
    "translations":{
      "de":"Schweiz",
      "es":"Suiza",
      "fr":"Suisse",
      "ja":"スイス",
      "it":"Svizzera",
      "br":"Suíça",
      "pt":"Suíça",
      "nl":"Zwitserland",
      "hr":"Švicarska",
      "fa":"سوئیس"
    },
    "flag":"https://restcountries.eu/data/che.svg",
    "regionalBlocs":[
      {
        "acronym":"EFTA",
        "name":"European Free Trade Association",
        "otherAcronyms":[

        ],
        "otherNames":[

        ]
      }
    ],
    "cioc":"SUI"
  }
];

export const mockEventDataRegion = {
  target: {
    id: 'regionSelect',
    value: 'Europe'
  }
}
export const mockEventDataCountry = {
  target: {
    id: 'countrySelect',
    value: 'Sweden'
  }
}

export const mockMappedEuropeanCountryData: MappedData[] = [
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

export const mockMappedAsianCountryData: MappedData[] = [
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
