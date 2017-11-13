# simplePagination
Simple Pagination using Javascript/JQuery

Initialization

<div id="pagination"></div>
var datasource = [];
Pagination.Init($('#pagination'), datasource.length);

Displaying the data

Sample function to print the result. 
Use the properties 'size' and 'page' to retrieve the required range of values from the datasource.

function printContent() {
    $('#container').empty();
    var start = (Pagination.page - 1) * Pagination.size;
	  var end = Math.min(data.length, Pagination.page * Pagination.size);
	  for (var i = start; i < end; i++)
	      $('<li>', { text: `item ${data[i]}`}).appendTo('#container');
}
