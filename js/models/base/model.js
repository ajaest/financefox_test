window.define([
    'chaplin'
], function(Chaplin) {
    
    function Model() {
        Chaplin.Model.prototype.constructor.apply(this, arguments);
    }
    
    Model.prototype = Object.create(Chaplin.Model.prototype);
    Model.prototype.constructor = Model;
    
    return Model;
});
