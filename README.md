# DeutscheBank

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.1.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## What tech have I used

- Angular Cli
- Angular v12
- RXJS
- NGRX
- NGRX DevTools
- SCSS
- lodash
- Bootstrap

## How it works / what I've done:

- User selects a region from the hardcoded dropdown, this populates a 2nd dropdown with countries from the given region
- Upon selection of a country a button is shown to the user
- Clicking the button displays a table showing the user that countries name / capital / population / currencies & an image of their flag. The button also becomes in-active.
- Changing the region (select box 1) at any time removes the country dropdown / button & table from view
- Changing the country (select box 2) at any time removes the table from view (the button becomes active again once another country is selected)
- When the display table is visible the button becomes in-active
- Some basic styles have been added to give the demo a bit more depth
- SCSS used with partial files / variables etc...
- All data (region / country selection & country lists) are stored in state using NGRX
- Caching has been added through a caching service and an HTTP interceptor
- Models have been used against most areas of functionality
- Environment variables have been set-up for global settings to give better separation of concerns and not tie settings down to individual components

## What else would I do with more time?

- Add NGRX effects (was unable to get this working with latest version of NGRX)
- Improve organisation of state and make use of custom selectors / MemoizedSelectors
- Add in some loading animations to make the user experience smoother whilst interacting with the select boxes / data table

## Coding styles

- curly brackets used in template to determine which styles are custom and which are coming from Bootstrap.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
