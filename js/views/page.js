define(function(require) {

	return new (Backbone.View.extend({

		el: 'div#page-content',
		$head: $('header > h1'),

		show: function(id, title) {
			this.$head.html(title);
			this.$el.children().addClass('hidden');
			this.$('#' + id).removeClass('hidden');
		}

	}));

});
