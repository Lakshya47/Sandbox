var myApp = angular.module("MyApp", ["ngAnimate"]);
/*myApp.animation('.my-repeat-animation',function() {
	return {
	    enter : function(element, done) {
	      jQuery(element).css({
	        position:'relative',
	        left:-20,
	        opacity:0
	      });
	      jQuery(element).animate({
	        left:0,
	        opacity:1
	      }, done);
	    },

	    leave : function(element, done) {
	      jQuery(element).css({
	        position:'relative',
	        left:0,
	        opacity:1
	      });
	      jQuery(element).animate({
	        left:20,
	        opacity:0
	      },1000, done);
	    },
	    
	    addClass: function(element, className, done) {
		      jQuery(element).css({
		        position:'relative',
		        left:300,
		        opacity:1
		      });
		      jQuery(element).animate({
		        left:400,
		        opacity:.5
		      },1000, done);
	    },

	    move : function(element, done) {
	      jQuery(element).css({
	        opacity:0.5
	      });
	      jQuery(element).animate({
	        opacity:1
	      }, done);
	    }
	  };
	}
);
*/