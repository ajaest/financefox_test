window.define([
    'chaplin'        , 
    'views/site-view'
], function(
    Chaplin , 
    SiteView
) {
    'use strict';
    
    function Controller() {
        Chaplin.Controller.prototype.constructor.apply(this, arguments);
    }
    
    Controller.prototype = Object.create(Chaplin.Controller.prototype);
    Controller.prototype.constructor = Controller;

    Controller.prototype.beforeAction = function() {
        this.reuse('site', SiteView);
    };

    return Controller;
});
