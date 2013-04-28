CaliforniaInternet.Views.SupportModal = Backbone.View.extend({
	
	tagName: "div",
	id: "",
	className: "",
	template: JST['home/support_modal'],

	initialize: function() {
		_.bindAll(this);
	},

	events: {
    },

	render: function () {
		this.$el.html(this.template());
		return this;
	}
});