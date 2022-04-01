# Timing with JavaScript #

There are specific timing functions that allow you to do certain things after certain time intervals. For example, the user could click a button on the creen and then 3x seconds later a message will appear; or we could create a JavaScript function to run every 5x seconds.

We will cover how to use `setTimeout` and `setInterval`.

#### Set Time Out ####
The `setTimeOut` function takes in 2x parameters in order to work. You will need to declare your function as the first function, then for the second function the duration in **milliseconds**.  When the `setTimeOut` function is activated, the code will execute after the duratoion specified.
```
<button onClick="setTimeout(funcName, 3000)">Click Me</button>
```

#### Set Interval ####
The `setInterval` function works the same as the previous function.  It also takes in 2x parameters - with the function you wish to execute being the first and the duration being the second.  The duration is also defined in *milliseconds*.  When the `setInterval` function has been activated, the code will execute after the duration specified and will continue to do so until the page closes down.
```
<button onClick="setInterval(funcName, 3000)">Click Me</button>
```

The timing functions will have to be inside an **event listener** in order for it to work. In our example we have craeted an event listener within the button tag so when the user clicks the button, the function will execute.  This can be used on other event listeners.
