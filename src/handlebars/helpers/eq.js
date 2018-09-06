var exports = function() {};

exports.register = function(Handlebars) {
	Handlebars.registerHelper('eq', function(lvalue, rvalue, options) {
		if (arguments.length < 3)
		throw new Error("Handlebars Helper equal needs 2 parameters");
		if (lvalue === rvalue) {
			return options.fn(this);
		} else {
			return options.inverse(this);
		}
	});

	Handlebars.registerHelper('find', function(array, id, prop) {
		return array.find(x => x.id === id)[prop];
	});
};

module.exports = exports;
