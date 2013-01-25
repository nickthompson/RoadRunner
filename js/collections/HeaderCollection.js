// Header Collection
// ===================

// Includes file dependencies
define([ "jquery","backbone","models/HeaderModel" ], function( $, Backbone, HeaderModel ) {

    // Extends Backbone.Router
    var HeaderCollection = Backbone.Collection.extend( {

        // Sets the Collection model property to be a Category Model
        model: HeaderModel,

    } );

    // Returns the Model class
    return HeaderCollection;

} );