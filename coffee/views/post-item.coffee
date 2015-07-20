define [
    'views/base/view'
    'text!/templates/post-item.hbs'
], (View, template) ->
    
    class PostDetailView extends View
        autoRender: true
        
        tagName: 'li'
        
        className: 'post-summary'
        
        template: template
        template = null 
        