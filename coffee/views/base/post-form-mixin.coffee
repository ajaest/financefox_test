define [
    'lib/utils'
], (utils) ->
    
    class PostFormMixin
    
        getModel: () ->
            if @model
                @model
            else
                @collection.model
    
        render: () ->
            this.constructor.__super__.render.call(this)
            
            @title     = @$ '#title'    
            @content   = @$ '#content'
            @image_url = @$ '#image_url'
            @lat       = @$ '#lat'      
            @long      = @$ '#long'     
            
            @image_snapshot = @$ '#image_snapshot'
            @map_snapshot   = @$ '#map_snapshot'  
            
            @success_msg = @$ '#success'
            @error_msg   = @$ '#error'
            @errors      = @$ '#errors'      
            @save_button = @$ '#save_button'
            
            @go_back_anchor = @$ '#go-back-anchor'
            
            @go_back_anchor.text(@go_back_anchor_text)
        
        events:
            'keypress #image_url' : 'updateImageSnapshot'
            'change   #image_url' : 'updateImageSnapshot'
            'paste    #image_url' : 'updateImageSnapshot'
            
            'keypress #lat'  : 'updateMapSnapshot'
            'change   #lat'  : 'updateMapSnapshot'
            'paste    #lat'  : 'updateMapSnapshot'
            'keypress #long' : 'updateMapSnapshot'
            'change   #long' : 'updateMapSnapshot'
            'paste    #long' : 'updateMapSnapshot'
            
            'click #save_button' : 'save'
        
        onSaveSuccess : (obj)->
                
            @error_msg  .css('display', 'none'   )
            @success_msg.css('display', 'inline' )
            @success_msg.focus()
            
            after_show_message = () ->
                window.location = '#/posts/' + ((obj and obj.attributes.id) or @model.id)    
            
            setTimeout after_show_message.bind(@), 1000
        
        onSaveError : (error) ->
            @error_msg.html(error)
            @error_msg.css('display', 'inline')
            @error_msg.css('display', 'none'  )
        
        extractModelFieldsFromDOM : () ->
            {
                title    : @title    .val()
                content  : @content  .val()
                image_url: @image_url.val()
                lat      : @lat      .val()
                long     : @long     .val() 
            }
        
        alterImageSnapshotSrc: () ->
            new_image_url= @image_url.val()
            
            @image_snapshot.attr('src', new_image_url)
            
            @timeoutUpdateImageWait=false
        
        timeoutUpdateImageWait: false
        updateImageSnapshot: () ->
            if not @timeoutUpdateImageWait
                @timeoutUpdateImageWait = true
                setTimeout @alterImageSnapshotSrc.bind(@), 1000
        
        alterMapSnapshotSrc: () ->
            lat = @lat .val()
            long= @long.val()
            
            if lat and long
                new_map_url = utils.consctruct_gmap_url(lat, long)
                
                @map_snapshot.attr('src', new_map_url)
                
            @timeoutUpdateMapWait = false
        
        timeoutUpdateMapWait: false
        updateMapSnapshot: () ->
            if not @timeoutUpdateMapWait
                @timeoutUpdateMapWait = true
                setTimeout @alterMapSnapshotSrc.bind(@), 1000