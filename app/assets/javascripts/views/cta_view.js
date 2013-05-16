CaliforniaInternet.Views.CtaModal = Backbone.View.extend({
	
	tagName: "div",
	id: "",
	className: "c-centered",
	template: JST['cta/cta_modal'],

	initialize: function() {
		_.bindAll(this);
	},

	events: {
		"keyup #cta-city"                     :   "searchCities",
        "keypress #cta-city"                  :   "searchCities"
    },

    searchCities: function() {
    	
    },

	render: function () {
		this.$el.html(this.template());
		return this;
	}

});