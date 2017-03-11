function directors (films) {
  var  obj = {};
  films.results.forEach( function ( element) {
     var director =  element.director;
     if (! obj[director]) {
        obj[director] = {name:  element.director, films: [ element.title]};
     } else {
        obj[director].films.push( element.title);
     }
   });
   var  result = [];
   for (var key in  obj) {
      result.push( obj[key]);
   }
   return  result;
 }

 module.exports = { directors};
