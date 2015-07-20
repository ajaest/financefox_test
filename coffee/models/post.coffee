define [
  'models/base/model'
  'moment'
  'lib/utils'
], (Model, moment, utils) ->
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
            if data
                data.updated_at       = moment(data.updated_at)
                data.updated_at_human = data.updated_at.calendar()
                data.created_at       = moment(data.created_at)
                data.created_at_human = data.created_at.calendar()
                
                data.map_url = utils.consctruct_gmap_url(data.lat, data.long)
                
                ln_splitted_content =  data.content.split(/\n|\r\n/)
                html_content = ''
                html_content += '<p>' +  paragraph + '</p>' for paragraph in ln_splitted_content
                data.par_content = html_content
                
            super(data,conf) 
        
        toJSON: (opts) ->
            obj = super(opts)
            
            # The model uses {'post':<object>} for PUT/POST/
            wrapped_obj = {
                'post' : obj
            }
            
            return wrapped_obj;
