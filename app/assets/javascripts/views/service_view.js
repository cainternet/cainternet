CaliforniaInternet.Views.ServiceView = Backbone.View.extend({
	
	tagName: "div",
	id: "service-search-box",
	className: "offset2 span8",
	template: JST['service/service_search'],

	initialize: function() {
		_.bindAll(this);
	},

	events: {
    },

	render: function () {
		this.$el.html(this.template());
		return this;
	}
});3