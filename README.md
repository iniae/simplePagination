# simplePagination
Simple Pagination using Javascript/JQuery

[JSFiddle Sample](https://jsfiddle.net/Innat3/auw2coc0/)

## Initialization

```
<div id="pagination"></div>
var datasource = [];
Pagination.Init($('#pagination'), datasource.length);
```

## Displaying The Data

Sample function to print the result. 
Use the properties **.size** and **.page** to retrieve the required range of values from the datasource.

```
function printContent() {
    	$('#container').empty();
    	var start = (Pagination.page - 1) * Pagination.size;
    	var end = Math.min(data.length, Pagination.page * Pagination.size);
	for (var i = start; i < end; i++)
	      $('<li>', { text: datasource[i] }).appendTo('#container');
}
```
