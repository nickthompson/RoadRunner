// Slider Model
// ==============

// Includes file dependencies
define([ "jquery", "backbone" ], function( $, Backbone ) {

    // The Model constructor
    var SliderModel = Backbone.Model.extend( {
    	defaults: {
    		name: 'test',
    		href: 'test.com',
    		imgSrc: 'test.jpg'
    	}

    } );

    // Returns the Model class
    return SliderModel;

} );