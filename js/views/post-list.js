window.define([
    'views/base/collection-view', 
    'views/post-item'
], function(
    CollectionView, 
    PostItemView
) {
    'use strict';
    
    function PostCollectionView() {
        CollectionView.prototype.constructor.apply(this, arguments);
    }
    
    PostCollectionView.prototype = Object.create(CollectionView.prototype);
    PostCollectionView.prototype.constructor = PostCollectionView;

    PostCollectionView.prototype
    .itemView = PostItemView;

    PostCollectionView.prototype
    .tagName = 'ol';

    PostCollectionView.prototype
    .className = 'post-summary-list';

    PostCollectionView.prototype
    .autoRender = true;

    return PostCollectionView;
});
