CaliforniaInternet.Views.ServiceResultsView = Backbone.View.extend({
	
	tagName: "tbody",
	id: "",
	className: "",
	template: JST['service/service_results_view'],

	initialize: function() {
		_.bindAll(this);
	},

	events: {
		"click #cta-order-btn"                       :   "openOrderBox"
    },

    openOrderBox: function() {
    	var city = $('#cta-city').val();
    	var orderBoxView = new CaliforniaInternet.Views.OrderBoxView({ city: city })
      	$('#service-areas-container').html(orderBoxView.render().$el);
    },

	render: function () {
		this.$el.html(this.template({ collection: this.collection }));
		return this;
	}

});