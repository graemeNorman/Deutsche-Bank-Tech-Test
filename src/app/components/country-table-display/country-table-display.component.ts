import { Component, Input } from '@angular/core';
import { MappedData } from "../../models/models";

@Component({
  selector: 'app-country-table-display',
  templateUrl: './country-table-display.component.html',
  styleUrls: ['./country-table-display.component.scss']
})

export class CountryTableDisplayComponent {
  @Input() data!: MappedData;
}
