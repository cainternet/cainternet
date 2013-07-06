CaliforniaInternet.Views.PartnerModal = Backbone.View.extend({
	
	el: "#partner-program-container",

	initialize: function() {
		_.bindAll(this);
	},

	events: {
		"click #partner-form-btn":      "showModalForm"
    },

    showModalForm: function() {
    	console.log("clicked")
    	$('#partnerModal').fadeIn(200);
    },

	render: function () {
		return this;
	}
});