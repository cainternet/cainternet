CaliforniaInternet.Views.Hero = Backbone.View.extend({
	
	tagName: "div",
	id: "heroContent",
	className: "offset2 span8",
	template: JST['home/hero'],

	initialize: function() {
		_.bindAll(this, 'detect_scroll');
		$(window).scroll(this.detect_scroll);
		this.panBackground();
	},

	events: {
		"mouseover #call-to-action-btn":  "ctaBtnHover"
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

    detect_scroll: function() {
    	console.log("picture me scrollin'");
    },

    ctaBtnHover: function() {
    },

	render: function () {
		this.$el.html(this.template());
		return this;
	}
});