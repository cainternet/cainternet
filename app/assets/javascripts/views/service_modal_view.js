CaliforniaInternet.Views.ServiceModal = Backbone.View.extend({
	
	tagName: "div",
	id: "",
	className: "",
	template: JST['service/service_modal'],

	initialize: function() {
		_.bindAll(this);
		console.log(this.model)
	},

	events: {
    },

	render: function () {
		this.$el.html(this.template({ model: this.model }));
		return this;
	}
});