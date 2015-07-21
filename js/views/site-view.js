window.define([
    'views/base/view', 
    'text!/templates/site.hbs'
], function(
    View    , 
    template
) {
    'use strict';
    
    function SiteView() {
        View.prototype.constructor.apply(this, arguments);
    }
    
    SiteView.prototype = Object.create(View.prototype);
    SiteView.prototype.constructor = SiteView;
    
    SiteView.prototype
    .container = 'body';
    
    SiteView.prototype
    .id = 'site-container';
    
    SiteView.prototype
    .regions = {
        main: '#main-container'       
    };
    
    SiteView.prototype
    .template = template;
    
    template = null;
    
    return SiteView;
});
