var _ = require('underscore');
var maps = require('../packages/maps');

var package = function(data){

  var doc = data._source.doc;

  return {
    name: doc.name,
    description: doc.description,
    author: doc.author,
    tags: maps.tags(doc),
    latest: maps.latestVersion(doc)
  };

};

var result = function(data){
  return {
    count: data.hits.total,
    packages: _.map( data.hits.hits, package ) 
  };
};

module.exports = {
  result: result,
  package: package
};
