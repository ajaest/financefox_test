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
            
        parse: (data,conf) ->
            
            data.updated_at       = moment(data.updated_at)
            data.updated_at_human = data.updated_at.calendar()
            data.created_at       = moment(data.created_at)
            data.created_at_human = data.created_at.calendar()
            
            data.map_url = 
                'https://www.google.com/maps/api/staticmap?'   + 
                '?key=AIzaSyAHJWwRi7CDMqBUjwfF18GmdphKVzTuZWI' + 
                '&zoom=14'                                     + 
                '&size=800x600'                                + 
                '&maptype=roadmap'                             + 
                '&markers=color:blue|label:P|'                 +
                data.lat + ',' + data.long
            ; 
            
            super(data,conf) 
