define ->
    'use strict'
  
    (match) ->
        match 'posts/:id'      , controller: 'post', action: 'detail'
        match 'posts/:id/edit' , controller: 'post', action: 'edit'
        match ''               , controller: 'post', action: 'list'
