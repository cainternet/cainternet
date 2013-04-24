CaliforniaInternet.Views.DashboardHero = Backbone.View.extend({
	
	tagName: "div",
	id: "",
	className: "row-fluid",
	template: JST['home/dashboard_hero'],

	initialize: function() {
		_.bindAll(this);
		this.panBackground();
	},

	events: {
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

	render: function () {
		this.$el.html(this.template());
		return this;
	}
});