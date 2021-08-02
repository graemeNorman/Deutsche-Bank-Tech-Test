import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-region-country',
  templateUrl: './region-country.component.html'
})

export class RegionCountryComponent {

  @Input() data: any;
  @Input() name: string | undefined;
  @Input() label: string | undefined;
  @Output() selectedValue: EventEmitter<any> = new EventEmitter();

  onSelect(eventData: any) {
    this.selectedValue.emit(eventData);
  }

}
