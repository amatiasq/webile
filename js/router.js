define(function(require) {

	require('promise').debug = true;
	require('lib/backbone.promise');

	var page = require('views/page');

	var Router = Backbone.Router.extend({

		routes: {
			'': 'backlog',
			'config': 'config',
			'backlog': 'backlog',
			'sprint-planning': 'sprintPlanning',
			'work': 'work',
			'report': 'report',
			'*actions': 'render',
		},

		initialize: function() {
			Backbone.history.start();
		},

		config: function() {
			page.show('config', 'Config');
			require('views/config').render();
		},

		backlog: function() {
			page.show('backlog', 'Backlog');
			require('views/backlog').render();
		},

		sprintPlanning: function() {
			page.show('sprint-planning', 'Sprint Planning');
			require('views/sprint_planning').render();
		},

		work: function() {
			page.show('work', 'Work');
			require('views/work').render();
		},

		report: function() {
			page.show('report', 'Report');
			require('views/report').render();
		},

		render: function() {
			page.show('', 'Error');
			console.log('Default handler');
		}

	});

	return new Router();

});
