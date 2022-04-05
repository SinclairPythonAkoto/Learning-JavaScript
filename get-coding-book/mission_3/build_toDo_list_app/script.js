function addItem(){
    var newItem = document.createElement("div");
    newItem.innerHTML = document.getElementById("box").value;
    newItem.onclick = removeItem;
    document.getElementById("list").appendChild(newItem);
    saveList();
}

function removeItem(){
    document.getElementById("list").removeChild(this);
    saveList();
}

function saveList(){
    localStorage.storedList = document.getElementById("list").innerHTML;
}

function loadList(){
    document.getElementById("list").innerHTML = localStorage.storedList;
    for(var item = 0; item < list.children.length; item++){
        list.children[item].onclick = removeItem;
    }
}
