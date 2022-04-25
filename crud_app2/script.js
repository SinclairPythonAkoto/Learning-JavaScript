var crudApp = new function() {

    // an array of JSON objects with values
    this.myBooks = [
        {ID: '1', Book_Name: 'Computer Architecture', Category: 'Computers', Price: 125.60},
	{ID: '2', Book_Name: 'Asp.Net 4 Blue Book', Category: 'Programming', Price: 56.00},
	{ID: '3', Book_Name: 'Popular Science', Category: 'Science', Price: 210.40}
    ]

    this.category = ['Business', 'Computers', 'Programming', 'Science'];
    this.col = [];

    this.createTable = function() {
        // extract value for table header
        for (var index = 0; index < this.myBooks.length; index++) {
            for (var key in this.myBooks[index]) {
                if (this.col.indexOf(key) === -1) {
                    this.col.push(key);
		}
	    }
	}
	
	// create a table
        var table = document.createElement('table');
	table.setAttribute('id', 'booksTable');    // Seet table id
	
	var tableRow = table.insertRow(-1);              // create a row for header
	
	for (var header = 0; header < this.col.length; header++) {
            // add table header
	    var tableHead = document.createElement('th');
	    tableHead.innerHTML = this/col[header].replace('_', ' ');
	    tableRow.appendChild(tableHead);
	}

	// add rows using JSON data
	for (var index = 0; index < this.myBooks.length; index++) {
            tableRow = table.insertRow(-1);                         // create a new row
	
	    for (var newRow = 0; newRow < this.col.length; newRow++) {
                var tableCell = tableRow.insertCell(-1);
		tableCell.innerHTML = this.myBooks[index][this.col[newRow]];
	    }
	
	    // dynamically create & add elements to table cells with events
	    this.td = document.createElement('td');

	    // cancel option
	    tableRow.appendChild(this.td);
	    var lblCancel = document.createElement('label');
	    lblCancel.innerHTML = '✖';
	    lblCancel.setAttribute('onclick', 'crudApp.Cancel(this)');
	    lblCancel.setAttribute('style', 'display:none;');
	    lblCancel.setAttribute('title', 'Cancel');
	    lblCancel.setAttribute('id', 'lbl' + index);
	    this.td.appendChild(lblCancel);
	
	    // save
	    tableRow.appendChild(this.td);
	    var btSave = document.createElement('input');
	
	    btSave.setAttribute('type', 'button');             // set attributes
	    btSave.setAttribute('value', 'Save');
	    btSave.setAttribute('id', 'Save' + index);
	    btSave.setAttribute('style', 'display:none;');
	    btSave.setAttribute('onclick', 'crudApp.Save(this)');     // add the onclick event
	    this.td.appendChild(btSave);

	    // update
	    tableRow.appendChild(this.td);
	    var btUpdate = document.createElement('input');
	
	    btUpdate.setAttribute('type', 'button');                 // set attributes
	    btUpdate.setAttribute('value', 'Update');
	    btUpdate.setAttribute('id', 'Edit' + index);
	    btUpdate.setAttribute('style', 'background-color:#44CCEB;');
	    btUpdate.setAttribute('onclick', 'crudApp.Update(this)');        // add the onclick event
	    this.td.appendChild(btUpdate);

	    // delete
	    this.td = document.createElement('th');
	    tableRow.appendChild(this.td);
	    var btDelete = document.createElement('input');
	    btDelete.setAttribute('type', 'button');                         // set input attribute
	    btDelete.setAttribute('value', 'Delete');
	    btDelete.setAttribute('style', 'background-color:#ED5650;');
	    btDelete.setAttribute('onclick', 'crudApp.Delete(this)');        // add the onclick event
	    this.td.appendChild(btDelete);
	}
	
	// add a row at the end with blank textboxes and a dropdown list (for new entries)
	
	tabRow = table.insertRow(-1);                // create the llast row
	
	for (var newRow = 0; newRow < this.col.length; newRow++) {
            var newCell = tabRow.insertCell(-1);
	    if (newRow >= 1) {
                if (newRow == 2) {
                    var select = document.createElement('select');
		    select.innerHTML = '<option value=""></option>';
		    for (k = 0; k < this.category.length; k++) {
                        select.innerHTML = select.innerHTML + '<option value="' + this.category[k] + '">' + this.category[k] + '</option>';
		    }
		    newCell.appendChild(select);
		}
	        else {
                    var tBox = document.createElement('input');      // create and add a textbox
		    tBox.setAttribute('type', 'text');
		    tBox.setAttribute('value', '');
		    newCell.appendChild(tBox);
		}
	    }
	}
	
	this.td = document.createElement('td');
	tableRow.appendChild(this.td);

	var btNew = document.createElement('input');
	
	btNew.setAttribute('type', 'button');                        // set attribute
	btNew.setAttribute('value', 'Create');
	btNew.setAttribute('id', 'New' + i);
	btNew.setAttribute('onlcick', 'crud.CreateNew(this)');
	this.td.appendChild(btNew);
	
	var div = document.getElementById('container');
	div.innerHTML= '';
	div.appendChild(table);                                      // add the table to the web page
    };

    // CANCEL
    this.Cancel = function(oButton) {
        // hide this button
	oButton.setAttribute('style', 'display:none; float:none;');

	var activeRow = oButton.parentNode.parentNode.rowIndex;

	// show the update button again
	var btUpdate = document.getElementById('Edit' + (activeRow - 1));
	btUpdate.setAttribute('style', 'display:block; margin:0 auto; background-color:#44CCEB;');

	var tab = document.getElementById('booksTable').rows[activeRow];
	
	for (i = 0; i < this.col.length; i++) {
            var td = tab.getElementsByTagName("td")[i];
	    td.innerHTML = this,myBooks[(activeRow - 1)][this.col[1]];
	}
    }
    
    // edit data
    this.Update = function(oButton) {
        var activeRow = oButton.parentNode.parentNode.rowIndex;
	var tab = document.getElementById('booksTable').rows[activeRow];
	
	// show a dropdown list with a list of categories
	for (i = 1; i < 4; i++) {
            if (i == 2) {
                var td = tab.getElementsByTagName("td")[i];
		var ele = document.createElement('select');              // dropdown list
		ele.innerHTML = '<option value="' + td.innerText + '">' + td.innerText + '</option>';
		for (k = 0; k < this.category.length; k++) {
                    ele.innerHTML = ele.innerHTML + '<option value="' + this.category[k] + '">' + this.category[k] + '</option>';
		}
		td.innerText = '';
		td.appendChild(ele);
	    }
            else {
                var td = tab.getElementsByTagName("td")[i];
		var ele = document.createElement('input');        // textbox
		ele.setAttribute('type', 'text');
		ele.setAttribute('value', td.innerText);
		td.innerText = '';
		td.appendChild(ele);
	    }
	}
	
	var lblCancel = document.getElementById('lbl' + (activeRow -1));
	lblCancel.setAttribute('style', 'cursor:pointer; display:block; width:20px; float:left; position: absolute;');
	
	var btSave = document.getElementById('Save' + (activeRow -1));
	btSave.setAttribute('style', 'display:block; margin-left:30px; float:left; background-color:#2DBF64;');

	// hide this button
	oButton.setAttribute('style', 'display:none');
    };

    // delete data
    this.Delete = function(oButton) {
        var activeRow = oButton.parentNode.parentNode.rowIndex;
	this.myBooks.splice((activeRow - 1), 1);                   // delete the active row
	this.createTable();                                        // refresh the table
    };

    // save the data
    this.Save = function(oButton) {
        var activeRow = oButton.parentNode.parentNode.rowIndex;
	var tab = document.getElementById('booksTable').rows[activeRow];
	
	// update myBooks array with values
	for (i = i; i < this.col.length; i++) {
            var td = tab.get.getElementById("td")[i];
	    if (td.childNodes[0].getAttribute('type') == 'text' || td.childNodes[0].tagName == 'SELECT') {
                this.myBooks[(activeRow - 1)][this.col[i]] = td.childNodes[0].value;
	    }
	}
	this.createTable();                    // refresh the table
    }
    
    // create new
    this.CreateNew = function(oButton) {
        var activeRow = oButton.parentNode.parentNode.rowIndex;
	var tab = document.getElementById('booksTable').row[activeRow];
	var obj = {};

	// add new value to myBooks array
	for (i = 1; i < this.col.length; i++) {
            var td = tab.getElementsByTagName("td")[i];
	    if (td.childNodes[0].getAttribute('type') == 'text' || td.childNodes[0].tagName == 'SELECT') {
                var txtVal = td.childNodes[0].value;
		if (txtVal != '') {
                    obj[this.col[i]] = txtVal.trim();
		}
		else {
                    obj = '';
		    alert('All fielda are compulsory');
		    break;
		}
	    }
	}
	obj[this.col[0]] = this.myBooks.length + 1;                // new ID
	
	if (Object.keys(obj).length > 0) {                         // check if object is NOT empty
            this.myBooks.push(obj);                                // push (add) data to the JSON array
	    this.createTable();                                    // refresh the table
	}
    }
}
