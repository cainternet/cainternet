CaliforniaInternet.Routers.Main = Backbone.Router.extend({
	
	routes: {
    	"":                              "homePage",
      "getservice":                    "getService",
      "management/county/:county":     "adminCountyCities",
      "business":                      "businessPage",
      "residential":                   "residentialPage",
      "partner":                       "partnerPage"
    },

    initialize: function() {
      _.bindAll(this);

    }, // End of initialize

    homePage: function() {

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
      $("#call-to-action-btn").delay(800).fadeIn("slow");

      $('#quotes-slider').cycle({fx:'fade'});

    }, // END home

    businessPage: function() {
      var businessPageView = new CaliforniaInternet.Views.BusinessPage({})
      $('#business-services-container').html(businessPageView.render().$el);
    },

    residentialPage: function() {
      var residentialPageView = new CaliforniaInternet.Views.ResidentialPage({})
      $('#residential-services-container').html(residentialPageView.render().$el);
    },

    getService: function() {
      var serviceView = new CaliforniaInternet.Views.ServiceView({})
      $('#service-areas-container').html(serviceView.render().$el);
    }, // END service

    partnerPage: function() {
      var partnerModal = new CaliforniaInternet.Views.PartnerModal({})
    },

    adminCountyCities: function() {
      $('.city-service-form :checkbox').click(function() {
          var $this = $(this);
          if ($this.is(':checked')) {
                var thisService = new CaliforniaInternet.Models.CityService({ id: $(this).attr("data-id") }); 
                thisService.save({
                    available: true
                  }, {
                    success: function () {
                      console.log("saved")
                    },
                    error: function (model, xhr) {
                      var errors = $.parseJSON(xhr.responseText).errors
                      console.log(errors)
                    }
                }) // End of thisService.save
          } else {
                var thisService = new CaliforniaInternet.Models.CityService({ id: $(this).attr("data-id") }); 
                thisService.save({
                    available: false
                  }, {
                    success: function () {
                      console.log("saved")
                    },
                    error: function (model, xhr) {
                      var errors = $.parseJSON(xhr.responseText).errors
                      console.log(errors)
                    }
                }) // End of thisService.save    
          } // END if statement
      }); // End checkbox click
    }

}); // End of Router.Deals
