CaliforniaInternet.Routers.Main = Backbone.Router.extend({
	
	routes: {
    	"":                   "homePage"
    },

    initialize: function() {
      _.bindAll(this);
    }, // End of initialize

    homePage: function() {
      var dashboardHero = new CaliforniaInternet.Views.DashboardHero({})
      $('#hero').html(dashboardHero.render().$el); 
    }

}); // End of Router.Deals
