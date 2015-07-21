window.define([
    'chaplin'   ,
    'underscore'
], function(
    Chaplin,
    _
) {
  'use strict';
    var addmixin, consctruct_gmap_url, utils;
    
    utils = Chaplin.utils.beget(Chaplin.utils);
    
    addmixin = function(klass, mixin) {
        
        var method        , 
            name          , 
            oldconstructor, 
            ref           ,
            __super__
        ;
        
        oldconstructor = klass;
        __super__      = {}   ;
        
        for (name in mixin) {
            method = mixin[name];
            
            if(name in klass)
                __super__[name] = klass[name]
            ;            
            
            klass[name] = method;
        }
        
        if (!('prototype' in __super__))
            __super__.prototype = {}
        ;
        
        for (name in mixin.prototype) {
            method = mixin.prototype[name];
            
            if(name in klass.prototype)
                __super__.prototype[name] = klass.prototype[name]
            ; 
            
            klass.prototype[name] = method;
        }
        
        klass.__super__   = __super__     ;
        klass.constructor = oldconstructor;
        
        return klass;
    };
    
    consctruct_gmap_url = function(lat, lon) {
        return 'https://www.google.com/maps/api/staticmap?'   + 
               '?key=AIzaSyAHJWwRi7CDMqBUjwfF18GmdphKVzTuZWI' + 
               '&zoom=14'                                     + 
               '&size=800x600'                                + 
               '&maptype=roadmap'                             + 
               '&markers=color:blue|label:P|'                 + 
               lat + ',' + lon
        ;
    };
    
    _(utils).extend({
        addmixin           : addmixin           ,
        consctruct_gmap_url: consctruct_gmap_url
    });
    
    return utils;
});
