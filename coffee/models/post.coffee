define [
  'models/base/model'
  'moment'
], (Model, moment) ->
    'use strict'

    class Post extends Model
        
        defaults:
            title    : null
            content  : null
            lat      : null
            long     : null
            image_url: null
            
        urlRoot: 
            "https://challenge-api-larce.herokuapp.com/posts/"
        
        consctruct_gmap_url: (lat, long) ->
            
            'https://www.google.com/maps/api/staticmap?'   + 
            '?key=AIzaSyAHJWwRi7CDMqBUjwfF18GmdphKVzTuZWI' + 
            '&zoom=14'                                     + 
            '&size=800x600'                                + 
            '&maptype=roadmap'                             + 
            '&markers=color:blue|label:P|'                 +
            lat + ',' + long
             
        
        parse: (data,conf) ->
            if data
                data.updated_at       = moment(data.updated_at)
                data.updated_at_human = data.updated_at.calendar()
                data.created_at       = moment(data.created_at)
                data.created_at_human = data.created_at.calendar()
                
                data.map_url = @consctruct_gmap_url(data.lat, data.long)
            
            super(data,conf) 
        
        toJSON: (opts) ->
            obj = super(opts)
            
            # The model uses {'post':<object>} for PUT/POST/
            wrapped_obj = {
                'post' : obj
            }
            
            return wrapped_obj;
