alert("Computing math with JavaScript");


document.write( 2 * 3 + "<br>" );       // Basic Arithmetic: +, -, /, *
document.write( 2**3 + "<br>" );        // Exponents
document.write( 10 % 3 + "<br>" );      // Modulus Op. : returns remainder of 10/3
document.write( 1 + 2 * 3 + "<br>" );   // order of operations
document.write(10 / 3.0 + "<br><br>");  // int's and doubles


var num = 10;
num += 100;                              // +=, -=, /=, *=
document.write(num + "<br>");

num++;                                   // this increments the value by 1
document.write(num + "<br><br>");

// Math class has useful math methods
document.write( Math.pow(2, 3) + "<br>" );
document.write( Math.sqrt(144) + "<br>" );
document.write( Math.round(2.7) + "<br>" );


