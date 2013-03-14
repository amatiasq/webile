define(function(require) {

	var Promise = require('promise');
	var Users = require('data/users');

	var session = localStorage.session;
	var user = session ? new Users.Model(JSON.parse(session)) : null;
	user.fetch();

	function isLogged() {
		return !!user;
	}

	console.log('Session open:', isLogged());

	return {
		user: user,
		isLogged: isLogged,
	};
});
