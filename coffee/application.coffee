define [
  'chaplin'
], (Chaplin) ->
  'use strict'

  # The application object.
  # Choose a meaningful name for your application.
  class Application extends Chaplin.Application
    title: 'FinanceFox test APP'
    
    initRouter: (routes, options) ->
        
        options.pushState= false
        
        super routes,options 
