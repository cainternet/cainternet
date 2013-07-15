CaliforniaInternet.Views.HomeView = Backbone.View.extend({
	
	tagName: "div",
	id: "heroContent",
	className: "offset2 span8",
	template: JST['home/hero'],

	initialize: function() {
		_.bindAll(this);
		// Pan Image Background
		this.panBackground();
        this.heroAnimation();
		// Set up Manual Event Binding for Window
		$(window).scroll(this.detect_scroll);
	},

	events: {
		"mouseover #call-to-action-btn":  "ctaBtnHover",
        "click #call-to-action-btn":      "calltoAction"
    },

    calltoAction: function() {
        
    },

    panBackground: function() {
    	var intval = null;
		var pos = 0;
		intval = window.setInterval(moveBg, 80);
		function moveBg() {
		    pos++;
		    $("#hero").css({backgroundPosition: (pos * -1.2) + "px 0px"});
		}
    },

    heroAnimation: function() {

    },

    detect_scroll: function() {
    	// if ( $(window).scrollTop() >= 0 && $(window).scrollTop() <= 299 ) {
    	//  	$("#info-box-one").removeClass('info-box-hover');
    	//  	$("#info-box-two").removeClass('info-box-hover');
    	//  	$("#info-box-three").removeClass('info-box-hover');
    	//  	$("#info-box-four").removeClass('info-box-hover');
    	//  } // End IF Statement

    	//  if ( $(window).scrollTop() >= 300 && $(window).scrollTop() <= 680 ) {
    	//  	$("#info-box-one").addClass('info-box-hover').fadeIn(900)
    	//  	$("#info-box-two").removeClass('info-box-hover');
    	//  	$("#info-box-three").removeClass('info-box-hover');
    	//  	$("#info-box-four").removeClass('info-box-hover');
    	//  } // End IF Statement

    	//  if ( $(window).scrollTop() >= 681 && $(window).scrollTop() <= 1050 ) {
    	//  	$("#info-box-two").addClass('info-box-hover');
    	//  	$("#info-box-one").removeClass('info-box-hover');
    	//  	$("#info-box-three").removeClass('info-box-hover');
    	//  	$("#info-box-four").removeClass('info-box-hover');
    	//  } // End IF Statement

    	//  if ( $(window).scrollTop() >= 1051 && $(window).scrollTop() <= 1199 ) {
    	//  	$("#info-box-three").addClass('info-box-hover');
    	//  	$("#info-box-one").removeClass('info-box-hover');
    	//  	$("#info-box-two").removeClass('info-box-hover');
    	//  	$("#info-box-four").removeClass('info-box-hover');
    	//  } // End IF Statement

    	//  if ( $(window).scrollTop() >= 1200 && $(window).scrollTop() <= 1500 ) {
    	//  	$("#info-box-four").addClass('info-box-hover');
    	//  	$("#info-box-one").removeClass('info-box-hover');
    	//  	$("#info-box-two").removeClass('info-box-hover');
    	//  	$("#info-box-three").removeClass('info-box-hover');
    	//  } // End IF Statement
    },

    ctaBtnHover: function() {
    },

	render: function () {
		this.$el.html(this.template());
		return this;
	}
});