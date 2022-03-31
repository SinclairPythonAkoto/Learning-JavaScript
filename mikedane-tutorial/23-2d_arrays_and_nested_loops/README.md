# 2D Arrays & Nested Loops #

### 2D Arrays ###
A 2x dimensional array is basiaclly *2x arrays within one array*. 
```
numberGrid = [ [1, 2], [3, 4] ];
```

To access data within the 2d array is very simple and still similar to normal arrays; you just have to write the list index and then the index of the data within the list.
```
document.write( numberGrid[0][1] + "<br>" );
```

We can also modify existing data within the 2d array with the same way.
```
numberGrid[0][1] = 99;
document.write( numberGrid[0][1] );
```

**This is just an example of a 2d array but there are multidimensional arrays with multiple arrays within one single array.**

To find out more about 2d arrays click [here](https://www.geeksforgeeks.org/multidimensional-array-in-javascript/).

### Nested Loops ###
Nested loops are used to access data within multidimensional arrays.  To get the data, the first for loop iterates through the rows, then the second for loop iterates through the colum of the specified row.
```
for(var i = 0; i < numberGrid.length; i++){
     for(var j = 0; j < numberGrid[i].length; j++){
          document.write(numberGrid[i][j] + ", ");
     }
     document.write("<br>");
}
```

You can find more informaton on nested for loops [here](https://www.freecodecamp.org/news/nesting-for-loops-in-javascript/).
