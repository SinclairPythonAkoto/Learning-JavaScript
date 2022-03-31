alert("2D Arrays & Nested Loops in JavaScript");

// 2d array
numberGrid = [ [1, 2], [3, 4] ];

// modifying a value
numberGrid[0][1] = 99;

// getting data from an 2d array
document.write(numberGrid[0][0] + "<br>");
document.write(numberGrid[0][1] + "<br>");

// nested loops
for(var i = 0; i < numberGrid.length; i++){
     for(var j = 0; j < numberGrid[i].length; j++){
          document.write(numberGrid[i][j] + ", ");
     }
     document.write("<br>");
}


