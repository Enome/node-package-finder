
var latest = function(doc){
  if (doc['dist-tags'] && doc['dist-tags'].latest) {
    return doc['dist-tags'].latest;
  };
};


var tags = function(doc){
  if (latest(doc)) {
    var tags = doc.versions[latest(doc)].tags || [];
    var keywords = doc.versions[latest(doc)].keywords || [];
    return tags.concat( keywords );
  } else {
    return [];
  };
};


var description = function(doc){
  return doc.description;
};


var stars = function(doc){
  if( doc.users ){
    return Object.keys(stars).length;
  } 
  else {
    return 0
  };
};

var author = function(doc){

  if( doc.author ){
    return doc.author
  };

};


module.exports = function(doc){
  return {
    name: doc._id,
    tags: tags(doc),
    latest: latest(doc),
    description: description(doc),
    stars: stars(doc),
    author: author(doc)
  };
};
