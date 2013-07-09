CaliforniaInternet.Views.ResellersFormView = Backbone.View.extend({
	
	el: "#partner-program-container",

	initialize: function() {
		_.bindAll(this);
		$("#reseller_address_street").geocomplete({ details: "form" });
	},

	events: {
    },

	render: function () {
		return this;
	}
});