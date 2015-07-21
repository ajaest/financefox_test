var slice = [].slice;

window.define([
    'handlebars', 
    'chaplin'   , 
    'lib/utils'
], function(
    Handlebars, 
    Chaplin   , 
    utils
) {
    'use strict';
    
    Handlebars
    .registerHelper('url', function() {
        
        var i        , 
            options  , 
            params   , 
            routeName
        ;
        
        routeName = 
            arguments[0], 
            params = 3 <= arguments.length 
                ? slice.call(arguments, 1, i = arguments.length - 1) 
                : (i = 1, []), 
                  options = arguments[i++]
        ;
        
        return utils.reverse(routeName, params);
    });
    
    return null;
});
