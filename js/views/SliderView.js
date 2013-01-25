// Slider View
// =============

// Includes file dependencies
define([ "jquery", "backbone", "handlebars", "royalslider", "collections/SliderCollection" ], function( $, Backbone, handlebars, royalSlider, SliderCollection ) {

    // Extends Backbone.View
    var CategoryView = Backbone.View.extend( {
        el: $("#slider"),

        // Renders all of the Category models on the UI
        render: function() {
            
            
            this.collection = new SliderCollection();

            this.collection.add({ name: "hottest", href: "#", imgSrc: "img/slider-img/hottest.png"});
            this.collection.add({ name: "chillest", href: "#", imgSrc: "img/slider-img/chillest.png"});
            this.collection.add({ name: "nearby", href: "#", imgSrc: "img/slider-img/nearby.png"});
            this.collection.add({ name: "bars-clubs", href: "#", imgSrc: "img/slider-img/bars-clubs.png"});
            this.collection.add({ name: "restaurants", href: "#", imgSrc: "img/slider-img/restaurants.png"});

            var source = $("#sliderTemplate").html();
            var template = Handlebars.compile(source);
            var data = { collection: JSON.parse(JSON.stringify(this.collection.models)) }

            $(this.el).html(template(data));
            
            $(this.el).royalSlider({
                keyboardNavEnabled: true,
                controlNavigation: 'tabs',
                navigateByClick: false,
            });

            // Maintains chainability
            return this;

        }

    } );

    // Returns the View class
    return CategoryView;

} );