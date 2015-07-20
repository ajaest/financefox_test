define [
    'views/base/collection-view'
    'views/post-item'
], (
    CollectionView, 
    PostItemView
) -> 
    
    class PostCollectionView extends CollectionView
        
        itemView: PostItemView
        
        tagName: 'ol'
        
        autoRender: true