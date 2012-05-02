var follow = require('follow');
var requestEs = require('./request').requestEs;
var couchdb = require('../../settings').couchdb;
var map = require('./map');

var url = "http://" + couchdb.host + couchdb.path;

follow( { db: url, include_docs: true }, function(err, change){

  if( change.deleted ){
    requestEs(change, 'DELETE');
  } 
  else {

    var doc = change.doc;
    var package = JSON.stringify( map(doc) );
    requestEs(change, 'PUT', package);

  };

});
