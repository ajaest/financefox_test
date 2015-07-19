define [
  'models/base/model'
], (Model) ->
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
            
        parse: (data,conf) ->
            
            data.map_url = 
                'https://www.google.com/maps/api/staticmap?'   + 
                '?key=AIzaSyAHJWwRi7CDMqBUjwfF18GmdphKVzTuZWI' + 
                '&zoom=17'                                     + 
                '&size=800x600'                                + 
                '&maptype=roadmap'                             + 
                '&markers=color:blue|label:P|'                 +
                data.lat + ',' + data.long
            ; 
            
            super(data,conf) 
