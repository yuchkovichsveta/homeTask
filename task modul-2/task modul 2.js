var container = document.getElementById("container");
var tbody = document.getElementById("tbody");

function ajaxLoad(path, callback) { 
	var xhr = new XMLHttpRequest;
	xhr.open("GET", path, true);
	xhr.onload = function() {
		callback(xhr.responseText);
	}
	xhr.send( null );
} 

ajaxLoad("data.csv", function(t) { 
	var csv = t;
	var lines = csv.split("\n");
	var arr = lines.map(function(line){
		return line.split(",");
	})
	addTable(arr);
})

var addTable = function(obj) {
	obj.forEach(function (e, ind) {
		var column = 0;
   		var tr = document.createElement("tr");
   		if (ind == 0) {
   		 	addHeader(tr, e, ind, column);
		} else {
   			addBody(tr, e, ind, column);
   		}
   		tbody.appendChild(tr);
	});
}

var addHeader = function(tr, elem, index, column) {
	for(let emp of elem) {
		let td = document.createElement("td");
		td.innerText = emp;
		td.setAttribute("class", `column${column}`);
		let button = document.createElement("button");
		button.setAttribute("class", "sort");
		button.innerText = "sort";
		td.appendChild(button);
		tr.appendChild(td);
		column++;
	}
}

var addBody = function(tr, elem, index, column) {
	for(let emp of elem) {
	 	let td = document.createElement("td");
		td.innerText = emp;
		td.setAttribute("class", `column${column}`);
		tr.appendChild(td);
		column++;
	}
}

var sortCol = function(arr, arrTr) {
	let len = arr.length;
	let lenTr = arrTr.length;
		for (let i = 1; i < lenTr ; i++) {
			for(let j = 1; j < len-1; j++){
			let temp = 0;
			if (arr[j].outerText > arr[j + 1].outerText) {
				temp = arrTr[j + 1].outerHTML;
				arrTr[j + 1].innerHTML = arrTr[j].outerHTML;
				arrTr[j].innerHTML = temp;
			}
		}
	}
}

var sortDate = function(arr, arrTr) {
	let len = arr.length;
	let lenTr = arrTr.length;
	for (let i = 1; i < lenTr ; i++) {
		for(let j = 1; j < len-1; j++){
			let a = new Date(arr[j].outerText);
			let b = new Date(arr[j+1].outerText);
			let temp = 0;
			if (a > b) {
				temp = arrTr[j + 1].outerHTML;
				arrTr[j + 1].innerHTML = arrTr[j].outerHTML;
				arrTr[j].innerHTML = temp;
			}
		}
	}
}

container.addEventListener("click", function(e){
	if(e.target.getAttribute("class") == "sort"){
		let temp = e.target.parentNode.getAttribute("class");
		var arrCol = document.getElementsByClassName(temp);
		var arrTr = document.querySelectorAll("tr");
		if( temp == "column2" || temp == "column3") {
			sortDate(arrCol, arrTr);
		} else {
			sortCol(arrCol, arrTr);
		}
	}
})


