CaliforniaInternet.Views.OrderBoxView = Backbone.View.extend({
	
	tagName: "div",
	id: "",
	className: "row-fluid",
	template: JST['service/order_box_view'],

	initialize: function() {
		_.bindAll(this);
	},

	events: {
    },

	render: function () {
		this.$el.html(this.template({ city: this.options.city, services: this.options.services }));
		return this;
	}

});