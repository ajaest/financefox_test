window.define([
    'views/base/view'              , 
    'text!/templates/post_form.hbs', 
    'views/base/post-form-mixin'   , 
    'lib/utils'
], function(
    View         , 
    template     , 
    PostFormMixin, 
    utils
) {

    function PostEditView() {
        View.prototype.constructor.apply(this, arguments);
    }
    
    PostEditView.prototype = Object.create(View.prototype);
    PostEditView.prototype.constructor = PostEditView;
    
    PostEditView.prototype
    .autorender = true;

    PostEditView.prototype
    .template = template;

    template = null;

    PostEditView.prototype
    .go_back_anchor_text = 'Go back';

    PostEditView.prototype
    .save = function() {
        this.model.set(this.extractModelFieldsFromDOM());
        
        this.model.save()
            .then(
                this.onSaveSuccess.bind(this), 
                this.onSaveError  .bind(this)
            )
        ;
        return false;
    };
    
    utils.addmixin(PostEditView, PostFormMixin);
    
    return PostEditView;
});
