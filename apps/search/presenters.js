var package = function(data){

  var tags = function(){
    if (data.doc['dist-tags'] && data.doc['dist-tags'].latest) {
      console.log( data.doc.versions[data.doc['dist-tags'].latest].tags  );
      return data.doc.versions[data.doc['dist-tags'].latest].tags || [];
    } else {
      return [];
    };
  };

  return {
    name: data.doc.name,
    description: data.doc.description,
    tags: tags()
  };

};

var result = function(data){

  var packages = [];

  data.rows.forEach( function( data ){

    packages.push( package( data ) );

  });

  return {
    count: data.total_rows,
    packages: packages
  };

};

module.exports = {
  result: result,
  package: package
};
