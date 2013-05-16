CaliforniaInternet.Views.ServiceResultsView = Backbone.View.extend({
	
	tagName: "tbody",
	id: "",
	className: "",
	template: JST['service/service_results_view'],

	initialize: function() {
		_.bindAll(this);
		
	},

	events: {
    },

	render: function () {
		console.log(this.collection);
		this.$el.html(this.template({ collection: this.collection }));
		return this;
	}

});