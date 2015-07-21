window.define([
    'chaplin'
], function(
    Chaplin
) {
    'use strict';

    function Application() {
        Chaplin.Application.prototype.constructor.apply(this, arguments);
    }
    
    Application.prototype = Object.create(Chaplin.Application.prototype);
    Application.prototype.constructor = Application;

    Application.prototype
    .title = 'FinanceFox test APP';

    Application.prototype
    .initRouter = function(routes, options) {
        options.pushState = false;
        Chaplin.Application
        .prototype.initRouter.call(this, routes, options);
    };

    return Application;
});
