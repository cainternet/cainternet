CaliforniaInternet.Routers.Main = Backbone.Router.extend({
	
	routes: {
    	"":                              "homePage",
      "getservice":                    "getService",
      "management/county/:county":     "adminCountyCities",
      "business":                      "businessPage",
      "residential":                   "residentialPage",
      "partner":                       "partnerPage",
      "resellers/new":                 "resellerFormView",
      "customers":                     "customersPage"
    },

    initialize: function() {
      _.bindAll(this);

      // Event Listener for Support Link
      $("#support-link").click(function() {
          $('#supportModal').modal({
            show: true
          })
          var supportModal = new CaliforniaInternet.Views.SupportModal({})
          $('#supportModal').html(supportModal.render().$el);
      });

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
      $("#graphics-one").delay(1400).fadeIn(600).delay(1500).fadeOut(300);
      $("#text-one").delay(1250).fadeIn("slow").delay(4700).fadeOut(300);
      $("#graphics-two").delay(3900).fadeIn(300).delay(2400).fadeOut(300);

      $("#text-two").delay(7000).fadeIn("slow").delay(3400).fadeOut(300);
      $("#text-three").delay(7500).fadeIn("slow").delay(2900).fadeOut(300);
      $("#graphics-three").delay(8000).fadeIn("slow").delay(2500).fadeOut(300);

      $("#text-four").delay(11500).fadeIn("slow").delay(2900).fadeOut(300);
      $("#graphics-four").delay(11500).fadeIn("slow").delay(2900).fadeOut(300);

      $("#text-five").delay(15500).fadeIn("slow").delay(3200).fadeOut(300);
      $("#graphics-five").delay(15800).fadeIn("slow").delay(2900).fadeOut(300);

      $("#text-six").delay(20000).fadeIn("slow")
      $("#graphics-six").delay(21000).fadeIn("slow")

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
      $('body').css({'background-color':'#000000!important'});
    }, // END service

    partnerPage: function() {
      var partnerModal = new CaliforniaInternet.Views.PartnerModal({})
    },

    customers: function() {

    },

    resellerFormView: function() {
      var resellersView = new CaliforniaInternet.Views.ResellersFormView();
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
