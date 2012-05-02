var _ = require('underscore');

var package = function(data){
  return data._source;
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
