window.define([
    'views/base/collection-view'   , 
    'text!/templates/post_form.hbs', 
    'views/base/post-form-mixin'   , 
    'lib/utils'
], function(
    CollectionView, 
    template      , 
    PostFormMixin , 
    utils
) {

    function PostCreateView() {
        CollectionView.prototype.constructor.apply(this, arguments);
    }
    
    PostCreateView.prototype = Object.create(CollectionView.prototype);
    PostCreateView.prototype.constructor = PostCreateView;
    
    PostCreateView.prototype
    .template = template;

    template = null;

    PostCreateView.prototype
    .go_back_anchor_text = 'Go to post list';

    PostCreateView.prototype
    .initItemView = function(model) {};

    PostCreateView.prototype
    .itemAdded = function(item, collection, options) {};

    PostCreateView.prototype
    .save = function() {
        this.collection.create(this.extractModelFieldsFromDOM(), {
            success: this.onSaveSuccess.bind(this),
            error  : this.onSaveError  .bind(this)
        });
        return false;
    };
    
    utils.addmixin(PostCreateView, PostFormMixin);
    
    return PostCreateView;
});
