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
		"click #service-name"						 :   "openServiceModal"
    },

    openOrderBox: function() {
      		var servicesCount = 0
      		var servicesArray = []
      		$( "input:checked" ).each(function() {
      			var serviceName = $(this).data("service");
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

    openServiceModal: function(e) {
    	var serviceName = $(e.currentTarget).text();

    	var service = new CaliforniaInternet.Models.Service();
    	service.fetch({
      		data: { service_name: serviceName },
    		processData: true,
      		success: function (response) {
      			var results = response.toJSON();
      			if (results[0].error) {
      				console.log("nothing")
      			} else {
      				$('#serviceModal').modal({
			            show: true
			        })
      				var serviceModalView = new CaliforniaInternet.Views.ServiceModal({ model: results }); 
      				$('#serviceModal').html(serviceModalView.render().$el);
      			}
			} // End Success
		}); // End fetch
    },

	render: function () {
		this.$el.html(this.template({ collection: this.collection }));
		return this;
	}

});