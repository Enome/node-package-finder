var earls = require('earls')();

earls.map({
    'search_new': '/'
  , 'search_index': '/search'
});

module.exports = earls.url;
