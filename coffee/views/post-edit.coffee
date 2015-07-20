define [
    'views/base/view'
    'text!/templates/post_form.hbs'
], (View, template) ->
    
    class PostEditView extends View
        autorender: true
        
        template: template
        template = null
        
        render: () ->
            super()
            
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
        
        save: () ->
            @model.set({
                title    : @title    .val()
                content  : @content  .val()
                image_url: @image_url.val()
                lat      : @lat      .val()
                long     : @long     .val() 
            });
            
            onSuccess = ()->
                
                @error_msg  .css('height', '0')
                @success_msg.css('height', '' )
                
                after_show_message = () ->
                    window.location = '#/posts/' + @model.id    
                
                setTimeOut after_show_message.bind(@), 3000
            
            onError = (error) ->
                @error_msg.html(error)
                @error_msg.css('height', '')
            
            @model.save
                success: onSuccess.bind(@)
                error  : onError.bind(@)
                
            false                    
        
        alterImageSnapshotSrc: () ->
            new_image_url= @image_url.val()
            
            @image_snapshot.attr('src', new_image_url)
            
            @timeoutUpdateImageWait=false
        
        timeoutUpdateImageWait: false
        updateImageSnapshot: () ->
            if not @timeoutUpdateImageWait
                @timeoutUpdateImageWait = true
                setTimeout @alterImageSnapshotSrc.bind(@), 2000
        
        alterMapSnapshotSrc: () ->
            lat = @lat .val()
            long= @long.val()
            
            new_map_url = @model.consctruct_gmap_url(lat, long)
            
            @map_snapshot.attr('src', new_map_url)
            
            @timeoutUpdateMapWait = false
        
        timeoutUpdateMapWait: false
        updateMapSnapshot: () ->
            if not @timeoutUpdateMapWait
                @timeoutUpdateMapWait = true
                setTimeout @alterMapSnapshotSrc.bind(@), 1000