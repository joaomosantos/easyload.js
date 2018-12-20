/* easyload.js v1.0.0 | MIT License | https://github.com/joaomosantos/easyload.js */
;(function($) {

	$.fn.easyload = function(options) {

		var defaults = {
			toCharge: 'img',
			fullCharge: 'loaded',
			dataAttribute: 'src'
		};
		
		var settings = $.extend(defaults, options);

		var OnScreen = function(element) {
			var win = $(window);
			var screenTop = win.scrollTop();
			var screenBottom = screenTop + win.height();
			var elementTop = element.offset().top;
			var elementBottom = elementTop + element.height();
			return elementBottom > screenTop && elementTop < screenBottom;
		};

		var OnLoad = function(element) {
			var image = element.find(settings.toCharge);
			var src = image.data(settings.dataAttribute);
			if(image.attr('src') !== src) {
				image.attr('src', src);
				image.on('load', function() {
					$(this).addClass(settings.fullCharge);
				});
			};
		};

		var OnRolling = function(element) {
			$(document).on('scroll', function() {
				if(OnScreen(element))
					OnLoad(element);	
			});
		};

		return this.each(function() {
			OnScreen($(this)) ? OnLoad($(this)) : OnRolling($(this));
		});

	};

}(jQuery));