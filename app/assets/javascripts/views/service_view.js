CaliforniaInternet.Views.ServiceView = Backbone.View.extend({
	
	tagName: "div",
	id: "service-search-box",
	className: "offset2 span8",
	template: JST['service/service_search'],

	initialize: function() {
		_.bindAll(this);
	},

	events: {
		"keyup #cta-city"                     :   "searchCities",
        "keypress #cta-city"                  :   "searchCities"
    },

    searchCities: function(e) {
    	var city = $(e.currentTarget).val();
    	var city = city.toLowerCase()
    	console.log(city);
    	var cityServices = new CaliforniaInternet.Collections.CityServices();
      	cityServices.fetch({
      		data: { city_name: city },
    		processData: true,
      		success: function (response) {
      			var results = response.toJSON();
      			console.log(results[0].error)
      			if (results[0].error) {

      			} else {
      				var resultsView = new CaliforniaInternet.Views.ServiceResultsView({ collection: results })
      				$('#service-results').html(resultsView.render().$el);
      			}

    		//  var deals = response.toJSON();
		    // _.each(deals, function(deal) {
		    // 	   var dealSlide = new WhiteDeals.Views.EditorSlide({ model: deal });
		    //     $('#swipe-wrap').append(dealSlide.render().$el);
			// });


			} // End Success
		}); // End fetch
    }, // End searchCities

	render: function () {
		this.$el.html(this.template());
		return this;
	}
});3