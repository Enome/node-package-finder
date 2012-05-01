var stringify = require('../utils').stringify;

describe('CouchDB Utilities', function(){
  
  describe('Stringify', function(){

    it('stringfies the doc functions included', function(){

      var doc = {
        views: {
          find: function(doc){ emit( doc._id, doc ); }
        }
      };

      stringify( doc ).should.eql( '{"views":{"find":"function (doc){ emit( doc._id, doc ); }"}}' );

    });

  });

});
