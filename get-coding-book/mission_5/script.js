var count = 0;

function updateCount(){
    count++;
    document.getElementById("number").innerHTML = count;
    setTimeout(updateCount, 1000);
}
