define [
    'views/base/collection-view'
    'text!/templates/post_form.hbs'
    'views/base/post-form-mixin'
    'lib/utils'
], (CollectionView, template, PostFormMixin, utils) ->
    
    class PostCreateView extends CollectionView
    
        template: template
        template = null
        
        go_back_anchor_text : 'Go to post list'
        
        initItemView: (model) ->
            # Not needed (we are not going to render here, delegate
            # to other view
            
        itemAdded : (item, collection, options) ->
            # Prevent automatic rendering to happen 
        
        save: () ->
            @collection
                .create(
                    @extractModelFieldsFromDOM(),
                    success: @onSaveSuccess.bind(@)
                    error  : @onSaveError  .bind(@)
                )
                
            false
        
    PostCreateView = utils.addmixin(PostCreateView, PostFormMixin)