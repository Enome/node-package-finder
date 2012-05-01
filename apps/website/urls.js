var earls = require('earls')();

earls.map({
    'search_new': '/'
  , 'search_index': '/search'
  , 'packages_show': '/packages/show/:id'
});

module.exports = earls.url;
