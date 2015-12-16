import {Redirect} from 'aurelia-router';

export class Poetry {
  configureRouter(config, router) {
    config.map([
			{ route: [''], viewPorts: { poem: { moduleId: 'empty' } } },
			{ route: 'poetry/:series/:id', viewPorts: { poem: { moduleId: 'poem' } } },
		]);
    
    this.router = router;
	}
	
	constructor() {
		this.num = 0;
		this.pick = Math.random();
	}
	
	series = [
		{ name: 'Love', href: 'love', length: 7, numbers: [] },
		{ name: 'I Am', href: 'i-am', length: 6, numbers: [] },
		{ name: 'Plagiarised', href: 'plagiarised', length: 14, numbers: [] },
	];
	
	
	activate() {
		this.num = (
			this.pick < 0.25 ? 1 :
			this.pick < 0.5	? 2 :
			this.pick < 0.75 ? 3 : 4
		);
		this.lights = `images/lights/lights-${this.num}.png`;
		
		const len = this.series.length;
		let subLen;
		for (let i = 0; i < len; i++) {
			subLen = this.series[i].length;
			for (let j = 1; j <= subLen; j++) {
				this.series[i].numbers.push(j);
			}
		}
		
	}
	
}