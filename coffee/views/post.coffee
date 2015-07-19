define [
    'views/base/view'
    'text!/templates/post.hbs'
], (View, template) ->
    
    class PostDetailView extends View
        autoRender: true
        
        template: template
        template = null 
        