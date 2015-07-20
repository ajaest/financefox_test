define [
    'views/base/view'
    'text!/templates/post-item.hbs'
], (View, template) ->
    
    class PostDetailView extends View
        autoRender: true
        
        template: template
        template = null 
        