var follow = require('follow');
var requestEs = require('./request').requestEs;
var couchdb = require('../../settings').couchdb;


var url = "http://" + couchdb.host + ':' + couchdb.port + couchdb.path;

follow( { db: url, include_docs: true }, function(err, change){

  if( change.deleted ){

    requestEs(change, 'DELETE');

  } 
  else {

    var doc = change.doc;

    var tags = function(doc){
      if (doc['dist-tags'] && doc['dist-tags'].latest) {
        return doc.versions[doc['dist-tags'].latest].tags || [];
      } else {
        return [];
      };
    };

    var package = JSON.stringify({
      name: doc._id,
      tags: tags(doc)
    });

    requestEs(change, 'PUT', package);

  };

});
