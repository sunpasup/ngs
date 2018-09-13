import { Component, AfterViewInit, Input, ViewChild, Output, EventEmitter } from '@angular/core';

import * as Pikaday from 'pikaday';

import { I18n } from '@cisco-ngx/cui-utils';
import { CuiInputComponent } from '@cisco-ngx/cui-components';

@Component({
	selector: 'date-picker',
	templateUrl: './datepicker.component.html',
	styleUrls: ['./datepicker.component.scss']
})
export class DatepickerComponent implements AfterViewInit {
	i18n: any = I18n;
	picker: any;
	dateString: string;
	date: Date;
	@Input() label: string;

	@Output() dateSelected: EventEmitter<any> = new EventEmitter();

	@ViewChild('datepicker') datepickerInput: CuiInputComponent;

	constructor() { }

	ngAfterViewInit() {
		const element = document.getElementById(`input-${this.datepickerInput.guid}`);
		this.picker = new Pikaday({
			field: element,
			onSelect: this.onDateSelected.bind(this),
		});
	}

	onDateSelected(date: Date) {
		this.date = date;
		this.dateSelected.emit(date);
	}
}
