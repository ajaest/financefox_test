define ->
    'use strict'
  
    (match) ->
        match 'posts/:id', controller: 'post', action: 'detail'
        match ''         , controller: 'post', action: 'list'
