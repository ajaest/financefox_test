define [
  'underscore'
  'chaplin'
], (_, Chaplin) ->
    'use strict'

    utils = Chaplin.utils.beget Chaplin.utils

    addmixin = (klass, mixin) ->
        oldconstructor = klass
        klass          [name] = method for name, method of mixin
        klass.prototype[name] = method for name, method of mixin.prototype
        klass.constructor = oldconstructor
        klass

    consctruct_gmap_url =  (lat, long) ->
            
        'https://www.google.com/maps/api/staticmap?'   + 
        '?key=AIzaSyAHJWwRi7CDMqBUjwfF18GmdphKVzTuZWI' + 
        '&zoom=14'                                     + 
        '&size=800x600'                                + 
        '&maptype=roadmap'                             + 
        '&markers=color:blue|label:P|'                 +
        lat + ',' + long    

    _(utils).extend
        addmixin           : addmixin
        consctruct_gmap_url: consctruct_gmap_url

    utils
