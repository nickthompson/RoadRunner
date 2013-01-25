// Mobile Router
// =============

// Includes file dependencies
define([ "jquery","backbone", "../views/SliderView", "../views/HeaderView" ], function( $, Backbone, SliderView, HeaderView ) {

    // Extends Backbone.Router
    var CategoryRouter = Backbone.Router.extend( {

        // The Router constructor
        initialize: function() {

            var slider = new SliderView();
            slider.render();

            var header = new HeaderView();
            header.render();
            
            // Tells Backbone to start watching for hashchange events
            Backbone.history.start();


            

        },

        // Backbone.js Routes
        routes: {

            // When there is no hash bang on the url, the home method is called
            "": "home",

        },

        // Home method
        home: function() {

            // Programatically changes to the categories page
            $.mobile.changePage( "#home" , { reverse: false, changeHash: false } );

        }

    } );

    // Returns the Router class
    return CategoryRouter;

} );