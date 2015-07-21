define(['lib/utils'], function(utils) {
  'use strict';
  return function(match) {
    match('posts/new', {
      controller: 'post',
      action: 'new'
    });
    match('posts/:id', {
      controller: 'post',
      action: 'detail'
    });
    match('posts/:id/edit', {
      controller: 'post',
      action: 'edit'
    });
    match('posts/', {
      controller: 'post',
      action: 'redirect_home'
    });
    return match('', {
      controller: 'post',
      action: 'list'
    });
  };
});
