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

    ctaBtnHover: function() {
    },

	render: function () {
		this.$el.html(this.template());
		return this;
	}
});