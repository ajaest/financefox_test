window.define([
    'chaplin'          , 
    'models/base/model'
], function(
    Chaplin, 
    Model
) {

    function Collection() {
        Chaplin.Collection.prototype.constructor.apply(this, arguments);
    }
    
    Collection.prototype = Object.create(Chaplin.Collection.prototype);
    Collection.prototype.constructor = Collection;
    
    Collection.prototype.model = Model;

    return Collection;
});
