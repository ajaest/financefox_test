window.define([
    'chaplin', 
    'views/base/view'
], function(
    Chaplin, 
    View
) {
    'use strict';    
    function CollectionView() {
        Chaplin.CollectionView.prototype.constructor.apply(this, arguments);
    }
    
    CollectionView.prototype = Object.create(Chaplin.CollectionView.prototype);
    CollectionView.prototype.constructor = CollectionView;
    
    CollectionView.prototype
    .getTemplateFunction = View.prototype.getTemplateFunction;
    
    return CollectionView;
});
