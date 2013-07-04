CaliforniaInternet.Views.PartnerModal = Backbone.View.extend({
	
	el: "#partnerModal",

	initialize: function() {
		_.bindAll(this);
	},

	events: {
		"click #partner-form-btn":      "showModalForm"
    },

    showModalForm: function() {
		$('#partnerModal').modal({
            show: true
        })
    },

	render: function () {
		return this;
	}
});