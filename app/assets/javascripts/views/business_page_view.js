CaliforniaInternet.Views.BusinessPage = Backbone.View.extend({
	
	tagName: "div",
	id: "",
	className: "",
	template: JST['business/business_page'],

	initialize: function() {
		_.bindAll(this);
		this.render()
	},

	events: {
		"click #b-introduction-link":       "slideIntroduction",
		"click #b-fiber-fusion-link":       "slideFiberFusion",
		"click #b-metro-ethernet-link":     "slideMetroEthernet",
		"click #b-adsl-link":               "slideAdsl",
		"click #b-cable-link":              "slideCable",
		"click #b-fiber-link":              "slideFiber",
		"click #b-t1-link":    	            "slideTone",
		"click #b-wireless-ethernet-link":  "slideWirelessEthernet",
    },

    slideIntroduction: function() {
    	$('.carousel').carousel(0)
    },

    slideFiberFusion: function() {
    	$('.carousel').carousel(1)
    },

    slideMetroEthernet: function() {
    	$('.carousel').carousel(2)
    },

    slideAdsl: function() {
    	$('.carousel').carousel(3)
    },

    slideCable: function() {
    	$('.carousel').carousel(4)
    },

    slideFiber: function() {
    	$('.carousel').carousel(5)
    },

    slideTone: function() {
    	$('.carousel').carousel(6)
    },

    slideWirelessEthernet: function() {
    	$('.carousel').carousel(7)
    },

	render: function () {
		this.$el.html(this.template());
		$('.carousel').carousel({
		  interval: false
		})
		return this;
	}
});