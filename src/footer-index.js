import {bindable} from 'aurelia-framework';

export class FooterIndex {
	currentYear = new Date().getFullYear();
	footerLinks = [
		{ url: 'http://medium.com/@destroyvegas', img : `medium.jpeg`, alt: 'Medium' },
		{ url: 'http://www.twitter.com/destroyvegas', img : `twitter.png`, alt: 'Twitter' },
		{ url: 'http://somewhatnonfictional.tumblr.com', img : `tumblr.png`, alt: 'Tumblr' },
		{ url: 'http://www.flickr.com/photos/zackschuster/', img : `flickr.png`, alt: 'Flickr' },
	];
  @bindable router = null;
}