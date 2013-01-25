// Header Model
// ==============

// Includes file dependencies
define([ "jquery", "backbone" ], function( $, Backbone ) {

    // The Model constructor
    var HeaderModel = Backbone.Model.extend( {
    	defaults: {
    		name: 'nameMe',
    		href: '#',
    		float: 'right'
    	}

    } );

    // Returns the Model class
    return HeaderModel;

} );