CaliforniaInternet.Routers.Main = Backbone.Router.extend({
	
	routes: {
    	"":                   "home"
    },

    initialize: function() {
      _.bindAll(this);
    }, // End of initialize

    home: function() {

      var homeView = new CaliforniaInternet.Views.HomeView({})
      $('#hero-content-container').html(homeView.render().$el);
      // Event Bindings for Navigation
      $("#support-link").click(function() {
          $('#supportModal').modal({
            show: true
          })
          var supportModal = new CaliforniaInternet.Views.SupportModal({})
          $('#supportModal').html(supportModal.render().$el);
      });
      var infoBoxOne = new CaliforniaInternet.Views.InfoBoxOne({})
      $('#info-box-one').append(infoBoxOne.render().$el); 
      $("#tagline").delay(400).fadeIn("slow");
      $("button#call-to-action-btn").delay(800).fadeIn("slow");

      $('#quotes-slider').cycle({fx:'fade'});

    } // END home

}); // End of Router.Deals
