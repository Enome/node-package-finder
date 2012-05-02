var earls = require('earls')();

earls.map({
    'search_new': '/'
  , 'search_index': '/search'
  , 'packages_show': '/packages/show/:id'
  , 'packages_attachment': '/packages/attachment/:version/:name'
});

module.exports = earls.url;
