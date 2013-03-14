define(function(require) {

	return new (Backbone.View.extend({

		el: 'section#backlog',

		render: function() {
			// Execute once (add listeners, etc...)

			this.render = function() {
				// Execute on each render (render specific data)
			};

			return this.render();
		}

	}));

});
