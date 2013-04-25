CaliforniaInternet.Views.InfoBoxOne = Backbone.View.extend({
	
	tagName: "div",
	id: "",
	className: "hidden",
	template: JST['home/info_box_one'],

	initialize: function() {
		_.bindAll(this, 'detect_scroll');
		$(window).scroll(this.detect_scroll);
	},

	events: {
    },

    detect_scroll: function() {
    	// get the height of body
	    // var h = $(document).height();
	    // var y = $(document).scrollTop();
	    // console.log(h, y);
	    // if( y > (h*.300) && y < (h*.975) ){
	    //    $(".info-box").css({'background-color': 'rgba(5, 64, 105, 0.8)'}).fadeIn("slow");
	    // } else {
	    //    $('.info-box').fadeOut('slow');
	    // }
    },

	render: function () {
		this.$el.html(this.template());
		return this;
	}
});