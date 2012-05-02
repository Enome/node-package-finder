var latestVersion = function(doc){
  if (doc['dist-tags'] && doc['dist-tags'].latest) {
    return doc['dist-tags'].latest;
  };
};

var latest = function(doc){
  return doc.versions[latestVersion(doc)];
};

var description = function(doc){
  return doc.description;
};

var versions = function(doc){

  var versions = [];

  for(key in doc.versions){
    versions.push( doc.versions[key] );

    if( versions.length === 10 ){
      break;
    };
  };

  versions.sort( function(a, b){
    return a.version < b.version;
  });
  return versions;

};

var readme = function(doc){
  console.log( doc.readme );
  return doc.readme
};

var repository = function(doc){
  return latest(doc).repository;
};

var author = function(doc){
  return doc.author;
};

var contributors = function(doc){
  return latest(doc).contributors;
};

var tags = function(doc){
  var tags = latest(doc).tags || [];
  var keywords = latest(doc).keywords || [];
  return tags.concat( keywords );
};

module.exports = {

  package: function( doc ){

    return {
      name: doc.name,
      description: description( doc ),
      versions: versions(doc),
      readme: readme(doc),
      homepage: doc.homepage,
      repository: repository(doc),
      modified: doc.time.modified,
      created: doc.time.created,
      author: author(doc),
      contributors: contributors(doc),
      tags: tags(doc)
    };

  }

};
