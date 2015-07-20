define [
    'views/base/view'
    'text!/templates/post_form.hbs'
    'views/base/post-form-mixin'
    'lib/utils'
], (View, template, PostFormMixin, utils) ->
    
    class PostEditView extends View
        autorender: true
        
        template: template
        template = null
        
        go_back_anchor_text : 'Go back'
        
        save: () ->
            @model.set(@extractModelFieldsFromDOM())
            
            @model.save().then(
                @onSaveSuccess.bind(@),
                @onSaveError  .bind(@)
            )
                
            false
        
    PostEditView = utils.addmixin(PostEditView, PostFormMixin)
        
        