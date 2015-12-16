import {bindable} from 'aurelia-framework';

export class FooterIndex {
	currentYear = new Date().getFullYear();
	
  @bindable router = null;
}