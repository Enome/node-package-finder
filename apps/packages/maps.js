module.exports = {

  latestVersion: function(doc){
    if (doc['dist-tags'] && doc['dist-tags'].latest) {
      return doc['dist-tags'].latest;
    };
  },

  latest: function(doc){

    if( !doc.versions ){
      return
    };

    return doc.versions[this.latestVersion(doc)];

  },

  versions: function(doc){

    var versions = [];

    for(key in doc.versions){
      versions.push( doc.versions[key] );
    };

    return versions.reverse();

  },

  repository: function(doc){
    return this.latest(doc).repository;
  },

  contributors: function(doc){
    return this.latest(doc).contributors;
  },

  time: function(doc){

    if( doc.time ){
      return doc.time
    };

    if( doc.ctime && doc.mtime ){
      return { modified: doc.mtime, created: doc.ctime }
    };

  },

  tags: function(doc){
    if( this.latest(doc) ){
      var tags = this.latest(doc).tags || [];
      var keywords = this.latest(doc).keywords || [];
      return tags.concat( keywords );
    };
    return [];
  }

};
