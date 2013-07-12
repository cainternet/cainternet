CaliforniaInternet.Views.ServiceResultsView = Backbone.View.extend({
	
	tagName: "tbody",
	id: "",
	className: "",
	template: JST['service/service_results_view'],

	initialize: function() {
		_.bindAll(this);
	},

	events: {
		"click #cta-order-btn"                       :   "openOrderBox",
		"click .service-listing"                     :   "selectService"
    },

    openOrderBox: function() {
      		var servicesCount = 0
      		var servicesArray = []
      		$( ".selected" ).each(function() {
      			var serviceName = $(this).children('span').text()
      		    servicesArray.push(serviceName)
			    servicesCount = servicesCount + 1
			});
			console.log(servicesArray);
			if (servicesCount > 0) {
	      		var city = $('#cta-city').val();
	    		var orderBoxView = new CaliforniaInternet.Views.OrderBoxView({ city: city, services: servicesArray })
	      		$('#service-areas-container').html(orderBoxView.render().$el);
	      	} else {
	      		alert("Please Select A Service You Are Interested In");
	      	};
    },

    selectService: function(e) {
    	if ($(e.currentTarget).hasClass('c-blue')) {
    		$(e.currentTarget).removeClass('c-blue');
    		$(e.currentTarget).addClass('c-green');
    		$(e.currentTarget).addClass('selected');
    	} else {
    		$(e.currentTarget).removeClass('c-green');
    		$(e.currentTarget).addClass('c-blue');
    		$(e.currentTarget).removeClass('selected');
    	}
    	var serviceName = $(e.currentTarget).children('#service-name').text();
    },

	render: function () {
		this.$el.html(this.template({ collection: this.collection }));
		return this;
	}

});