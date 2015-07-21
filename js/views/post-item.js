window.define([
    'views/base/view'              , 
    'text!/templates/post-item.hbs'
], function(
    View    , 
    template
) {

    function PostDetailView() {
        View.prototype.constructor.apply(this, arguments);
    }
    
    PostDetailView.prototype = Object.create(View.prototype);
    PostDetailView.prototype.constructor = PostDetailView;
    
    PostDetailView.prototype
    .autoRender = true;

    PostDetailView.prototype
    .tagName = 'li';

    PostDetailView.prototype
    .className = 'post-summary';

    PostDetailView.prototype
    .template = template;

    template = null;

    return PostDetailView;
});
