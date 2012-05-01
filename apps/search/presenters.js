var _ = require('underscore');

var package = function(data){
  return {
    name: data._source.name,
    tags: data._source.tags
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
