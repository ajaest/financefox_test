define [
    'views/base/view'
    'text!/templates/post.hbs'
], (View, template) ->
    
    class PostDetailView extends View
        autoRender: true
        
        template: template
        template = null 
        
        events : 
            'click #remove-post' : 'removePost'
        
        
        removePost: () ->
            doRemove = window.confirm(
                'If you click OK, you will remove this post.' +
                ' Are you sure?'
            )
            
            if doRemove
                @model.destroy
                    success: () ->
                        window.location = '#/'
                    error: (err) ->
                        window.alert(err)
                
            