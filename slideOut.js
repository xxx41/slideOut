//Full slide library

//Slides out elements from viewport

(function(window,document) {

    var slideOut = function(window) {

        var lib = {

            //Slide+movement
            //Check if elementID is a string, then assigns DOM element to a var
            //and apply and remove styles on that var

            slideRight: function(elementID) {
                if (typeof elementID != 'string') return;
                var element = document.getElementById(elementID);
                element.style.transition = 'left 2s';
                element.style.left = '100vw';
                var transition = setTimeout(function() {element.style.transition = '';},1000);
            },

            slideLeft: function(elementID) {
                if (typeof elementID != 'string') return;
                var element = document.getElementById(elementID);
                element.style.transition = 'left 2s';
                element.style.left = '-100vw';
                var transition = setTimeout(function() {element.style.transition = '';},1000);
            },

            slideTop: function(elementID) {
                if (typeof elementID != 'string') return;
                var element = document.getElementById(elementID);
                element.style.transition = 'top 2s';
                element.style.top = '-100vw';
                var transition = setTimeout(function() {element.style.transition = '';},1000);
            },

            slideBot: function(elementID) {
                if (typeof elementID != 'string') return;
                var element = document.getElementById(elementID);
                element.style.transition = 'top 2s';
                element.style.top = '100vw';
                var transition = setTimeout(function() {element.style.transition = '';},1000);
            }
        };

        return lib;
    }

    if (typeof window.slideOut === "undefined") {
		window.slideOut = slideOut();
	}

})(window,document);
