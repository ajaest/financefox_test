define [
    'views/base/collection-view'
    'text!/templates/posts.hbs'
    'views/post'
], (CollectionView, template, PostView) -> 
    
    class PostCollectionView extends CollectionView
        
        itemView: PostView
    
        autoRender: true
                
        template: template
        template = null