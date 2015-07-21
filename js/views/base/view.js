window.define([
    'handlebars'     , 
    'chaplin'        , 
    'lib/view-helper'
], function(
    Handlebars, 
    Chaplin
) {
    'use strict';

    function View() {
        Chaplin.View.prototype.constructor.apply(this, arguments);
    }
    
    View.prototype = Object.create(Chaplin.View.prototype);
    View.prototype.constructor = View;

    View.prototype
    .getTemplateFunction = function() {
        
        var template    , 
            templateFunc
        ;
        
        template = this.template;
        
        if (typeof template === 'string') {
            templateFunc = Handlebars.compile(template);
            this.constructor.prototype.template = templateFunc;
        } else {
            templateFunc = template;
        }
        
        return templateFunc;
    };

    return View;
});
