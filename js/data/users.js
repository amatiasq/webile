define(function(require) {

	var User = Backbone.Model.extend({
		localStorage: new Backbone.LocalStorage("users"),
	});

	return _.extend(Backbone.Collection.extend({
		localStorage: new Backbone.LocalStorage("users"),
		model: User,
	}), { Model: User });

});
