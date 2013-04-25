CaliforniaInternet.Routers.Main = Backbone.Router.extend({
	
	routes: {
    	"":                   "homePage"
    },

    initialize: function() {
      _.bindAll(this);
    }, // End of initialize

    homePage: function() {
      var homeHero = new CaliforniaInternet.Views.Hero({})
      $('#hero-content-container').html(homeHero.render().$el);
      // Run Home Animation
      this.homeAnimation();

      var infoBoxOne = new CaliforniaInternet.Views.InfoBoxOne({})
      $('#info-box-one').append(infoBoxOne.render().$el); 
      $("#tagline").delay(400).fadeIn("slow");
      $("button#call-to-action-btn").delay(800).fadeIn("slow");
    },

    homeAnimation: function() {
      bonsai.run(document.getElementById('heroContent'), {
      code: function() {

        // -------- 0-5 Seconds ---------
        var tagline = new Text("California's Premier Internet Service Provider")
        tagline.attr({
          x: 200, 
          y: -30, 
          textFillColor: 'white',
          fontFamily: 'lato',
          fontWeight: '700',
          fontSize: '30px',
        });

        var taglineAnimation = new KeyframeAnimation('60', {
            '0': {x: 190, y: 0, opacity: 0},
            '15': {x: 190, y: 0, opacity: 0},
            to: ({x: 190, y: 40, easing: 'expoOut', opacity: 1 })
          }, 
          {repeat:0}
        );

        stage.addChild(tagline);
        tagline.animate(taglineAnimation);

        var ctaBtn = new Rect(355, 350, 280, 90).attr({
          fillColor: 'rgba(8,192,255,1)',
          opacity: 1,
          cornerRadius: 9,
        }).addTo(stage);

        var ctaBtnAnimation = new KeyframeAnimation('70', {
            '0': {x: 350, y: 430, opacity: 0},
            '30': {x: 350, y: 430, opacity: 0},
            to: {x: 350, y: 380, opacity: 1, easing: 'expoOut' }
          }, 
          {repeat:0}
        );
        ctaBtn.animate(ctaBtnAnimation);

        // -------- 5-10 Seconds ---------
      }, // code
      framerate: 45,
      width: '100%',
      height: 550
    });
    }

}); // End of Router.Deals
