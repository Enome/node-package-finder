var maps = require("./maps");

module.exports = {

  package: function( doc ){

    return {
      name: doc.name,
      description: doc.description,
      versions: maps.versions(doc),
      readme: doc.readme,
      homepage: doc.homepage,
      repository: maps.repository(doc),
      time: maps.time(doc),
      author: doc.author,
      contributors: maps.contributors(doc),
      tags: maps.tags(doc)
    };

  }

};
