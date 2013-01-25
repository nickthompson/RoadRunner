// Header View
// =============

// Includes file dependencies
define([ "jquery", "backbone", "handlebars", "collections/HeaderCollection" ], function( $, Backbone, handlebars, HeaderCollection ) {

    // Extends Backbone.View
    var CategoryView = Backbone.View.extend( {
        el: $("#header"),

        // Renders all of the Category models on the UI
        render: function() {
            
            
            this.collection = new HeaderCollection();

            this.collection.add({ name: "menuButton", float: "right"});
            
            var source = $("#headerTemplate").html();
            var template = Handlebars.compile(source);
            var data = { collection: JSON.parse(JSON.stringify(this.collection.models)) }

            $(this.el).html(template(data));

            //Menu Animation Code
            var menuStatus;
            // Show menu
            $("#menuButton").click(function () {
                if (menuStatus != true) {
                    $("#menuButton").addClass('rotate');
                    $(".ui-page-active").animate({
                        marginLeft: "-165px",
                    }, 300, function () {
                        $("#logo").css("z-index", "1");
                        menuStatus = true
                    });
                    return false;
                } else {
                    $("#menuButton").removeClass('rotate');
                        $("#logo").css('z-index', '0');
                    $(".ui-page-active").animate({
                        marginLeft: "0px",
                    }, 300, function () {
                        menuStatus = false
                    });
                    return false;
                }
            });
         
         
            $('#menu, .pages').live("swiperight", function () {
                if (menuStatus) {
                    $("#menuButton").removeClass('rotate');
                    $("#logo").css('z-index', '0');
                    $(".ui-page-active").animate({
                        marginLeft: "0px",
                    }, 300, function () {
                        
                        menuStatus = false
                    });
                }
            });
         
            $('.pages').live("swiperight", function () {
                if (!menuStatus) {
                    $("#menuButton").addClass('rotate');
                    $(".ui-page-active").animate({
                        marginLeft: "-165px",
                    }, 300, function () {
                        $("#logo").css("z-index", "1");
                        menuStatus = true
                    });
                }
            });
         
            $('div[data-role="page"]').live('pagebeforeshow', function (event, ui) {
                menuStatus = false;
                $(".pages").css("margin-left", "0");
            });
         
            // Menu behaviour
            $("#menu li a").click(function () {
                var p = $(this).parent();
                if ($(p).hasClass('active')) {
                    $("#menu li").removeClass('active');
                } else {
                    $("#menu li").removeClass('active');
                    $(p).addClass('active');
                }
            });

            // Maintains chainability
            return this;

        }

    } );

    // Returns the View class
    return CategoryView;

} );