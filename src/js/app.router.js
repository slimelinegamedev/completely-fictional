export default function ($stateProvider, $urlRouterProvider, $locationProvider) {
  'ngInject';
	$stateProvider
		.state('home', {
			url: '/',
			templateUrl: 'dist/html/home.html',
		})
		.state('poetry', {
			url: '/poetry',
			templateUrl: 'dist/html/poetry.html',
			controller: function ($scope){
				let num;
				const pick = Math.random();
				
				if (pick < 0.25) {
					num = 1;
				} else if (pick < 0.5) {
					num = 2; 
				} else if (pick < 0.75) {
					num = 3;
				} else {
					num = 4;
				}
					
				$scope.random = num;
			}
		})
		.state('poetry.book', {
			url: '/:name',			
			templateUrl: function ($stateParams){
				return `dist/html/poetry/${$stateParams.name}.html`;
			}
		})
		.state('poetry.poem', {
			url: 'not-quite-a-colossus/:poem',			
			templateUrl: function ($stateParams){
				return `dist/html/poetry/${$stateParams.poem}.html`;
			}
		})
		.state('poetry.name', {
			url: '/:series/:number',			
			templateUrl: function ($stateParams){
				return `dist/html/poetry/${$stateParams.series}/${$stateParams.number}.html`;
			}
		})
		.state('essaylist', {
			url: '/essays',			
			templateUrl: 'dist/html/essays.html'
		})
		.state('essay', {
			url: '/essays/:name',			
			templateUrl: function ($stateParams){
				return `dist/html/essays/${$stateParams.name}.html`;
			}
		})
		.state('reviewlist', {
			url: '/reviews',
			templateUrl: 'dist/html/reviews.html'
		})
		.state('review', {
			url: '/reviews/:name',			
			templateUrl: function ($stateParams){
				return `dist/html/reviews/${$stateParams.name}.html`;
			}
		})
		.state('trackback', {
			url: '/trackback',
			templateUrl: 'dist/html/trackback.html'
		})
		.state('trackbackChapter', {
			url: '/trackback/:chapter',			
			templateUrl: function ($stateParams){
				return `dist/html/${$stateParams.chapter}.html`;
			}
		})
		.state('large-round-eyes', {
			url: '/large-round-eyes',
			templateUrl: 'dist/html/lre.html'
		})
		.state('extras', {
			url: '/extras',
			templateUrl: 'dist/html/extras.html'
		})
		.state('cool-places', {
			url: 'extras/cool-places',		
			templateUrl: `dist/html/extras/cool-places.html`
		})
		.state('goAway', {
			url: '/go-away/:please',		
			templateUrl: function ($stateParams){
				return `dist/html/go-away/${$stateParams.please}.html`;
			}
		});
		
		$urlRouterProvider.otherwise('/');
		
		// $locationProvider.html5Mode(true);
		
}