module.exports = {
  fulltext: {
    search: {
      index: function(doc){
        var ret = new Document();

        if (doc.name){
          ret.add( doc.name );
        };

        if (doc['dist-tags'] && doc['dist-tags'].latest) {
          var tags = doc.versions[doc['dist-tags'].latest].tags;

          if( tags ){
            tags.forEach( function(tag){
              ret.add( tag );
            });
          };

        };

        return ret;
      }
    }
  }
}
