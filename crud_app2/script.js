var arrayHead = new Array();
arrayHead = ['', 'Emp. Name', 'Designation', 'Age'];    // table headers


// table structure
function createTable() {
    var empTable = document.createElement('table');
    empTable.setAttribute('id', 'empTable');    // table id

    var tableRow = empTable.insertRow(-1);

    for (var header = 0; header < arrayHead.length; header++) {
        var tableHead = document.createElement('th');    // the header object
	tableHead.innerHTML = arrayHead[head];
	tableRow.appendChild(tableHead);
    }

    var div = document.getElementById('cont');
    div.appendChild(empTable);    // add table to a container
}


// CREATE new row
function addRow() {
    var empTab = document.getElementById('empTable');
    var rowCount = empTab.rows.length;    // get the number of rows
    var tableRow = empTab.insertRow(rowCount);    // table row
    tableRow = empTab.insertRow(rowCount);

    for (var count = 0; count < arrayHead.length; count++) {
        var tableData = document.createElement('td');    // table definition
	tableData = tableRow.insertCell(count);
	
	if (count == 0) {    // if its the first column of the table
            // add a button control
            var button = document.createElement('input');
	    // set the attributes
	    button.setAttribute('type', 'button');
	    button.setAttribute('value', 'Remove');
	    // add buttons onclick event
	    button.setAttribute('onclick', 'removeRow(this)');
	    tableData.appendChild(button);
	}
	else {
            // the 2nd, 3rd & 4th column will have the textbox
	    var ele = document.createElement('input');
	    ele.setAttribute('type', 'text');
	    ele.setAttribute('value', '');
	    tableData.appendChild(ele);
	}
    }
}

// DELETE a row
function removeRow(oButton) {
    var empTab = document.getElementById('empTable');
    empTab.deleteRow(oButton.parentNode.parentNode.rowIndex);    // button -> td -> tr
}

// function to extract & submit table data
function submit() {
    var myTab = document.getElementById('empTable');
    var arrayValues = new Array();
    // loop through each row of the table
    for (row = 1; row < myTab.rows.length - 1; row++) {
        // loop through each cell in a row
        for (count = 0; count < myTab.rows[row].cells.length; count++) {
            var element = myTab.rows.item(row).cells[count];
	    if (element.childNodes[0].getAttribute('type') == 'text') {
                arrayValues.push("'" + element.childNodes[0].value + "'");
	    }
	}
    }

    // finally show the result in the console
    console.log(arrayValues);
}
