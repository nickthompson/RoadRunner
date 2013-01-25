// Slider Collection
// ===================

// Includes file dependencies
define([ "jquery","backbone","models/SliderModel" ], function( $, Backbone, SliderModel ) {

    // Extends Backbone.Router
    var SliderCollection = Backbone.Collection.extend( {

        // Sets the Collection model property to be a Category Model
        model: SliderModel,

    } );

    // Returns the Model class
    return SliderCollection;

} );