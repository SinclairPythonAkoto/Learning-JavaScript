alert("Creating Strings");


var greeting = "Hello";
//   indexes:   01234

var phrase = "Strings are cool";

document.write( greeting.length + "<br>" );
document.write( greeting.charAt(0) + "<br>"  );
document.write( greeting.indexOf("llo") + "<br>"  );
document.write( greeting.indexOf("z") + "<br>"  );
document.write( greeting.substring(2) + "<br>"  );
document.write( greeting.substring(1, 3) + "<br><br>"  );

document.write( phrase.length + "<br>" );
document.write( phrase.charAt(0) + "<br>"  );
document.write( phrase.indexOf("o") + "<br>"  );
document.write( phrase.indexOf("z") + "<br>"  );
document.write( phrase.substring(8) + "<br>"  );
document.write( phrase.substring(8, 11) + "<br><br>"  );

