window.define([
    'models/base/model', 
    'moment'           , 
    'lib/utils'
], function(
    Model, 
    moment, 
    utils
) {
        'use strict';
        
        function Post() {
            Model.prototype.constructor.apply(this, arguments);
        }
        
        Post.prototype = Object.create(Model.prototype);
        Post.prototype.constructor = Post;
        
        Post.prototype
        .defaults = {
            title    : null,
            content  : null,
            lat      : null,
            long     : null,
            image_url: null
        };
        
        Post.prototype
        .urlRoot = "https://challenge-api-larce.herokuapp.com/posts/";
        
        Post.prototype.parse = function(data, conf) {
            var html_content       , 
                i                  , 
                len                , 
                ln_splitted_content, 
                paragraph
            ;
            
            if (data) {
                // Convert dates to moment.js and obtain a readable string
                data.updated_at       = moment(data.updated_at)   ;
                data.updated_at_human = data.updated_at.calendar();
                
                data.created_at       = moment(data.created_at)   ;
                data.created_at_human = data.created_at.calendar();
                
                // Obtain the google maps url from coordinates
                data.map_url = utils.consctruct_gmap_url(data.lat, data.long);
                
                // Replaces line breaks in plain text with appropriate HTML
                ln_splitted_content = data.content.split(/\n|\r\n/);
                
                html_content = '';
                for (i = 0, len = ln_splitted_content.length; i < len; i++) {
                    paragraph = ln_splitted_content[i];
                    html_content += '<p>' + paragraph + '</p>';
                }
                
                data.par_content = html_content;
            }
            
            return Model.prototype.parse.call(this, data, conf);
        };
        
        Post.prototype.toJSON = function(opts) {
            var obj        , 
                wrapped_obj
            ;
            
            // For POST/PUT, the object must me wrapped in the following manner:
            // { 'post': <object> }
            obj = Model.prototype.toJSON.call(this, opts);
            
            wrapped_obj = {
              'post': obj
            };
            
            return wrapped_obj;
        };
        
        return Post;
});
