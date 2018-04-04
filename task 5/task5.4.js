var arrCountry = []; // объявление массива
 
arrCountry[0] = {
    name: "Belarus",
    flag: "White-Red",
    code: 112,
    population: 3520
};
arrCountry[1] = {
    name: "Russia",
    flag: "White-blue-red",
    code: 11233,
    population: 35420
};
arrCountry[2] = {
    name: "Ukrain",
    flag: "Blue-yellow",
    code: 231,
    population: 345320
};
arrCountry[3] = {
    name: "USA",
    flag: "White-Red",
    code: 112,
    population: 45320
};
arrCountry[4] = {
    name: "Britain",
    flag: "blue",
    code: 112,
    population: 65420
};
arrCountry[5] = {
    name: "Norway",
    flag: "Red",
    code: 12,
    population: 12200
};
arrCountry[6] = {
    name: "Serbia",
    flag: "Grean",
    code: 1,
    population: 123200
};
arrCountry[7] = {
    name: "Chehiua",
    flag: "Black",
    code: 1233,
    population: 12320
};
arrCountry[8] = {
    name: "Spain",
    flag: "Grey",
    code: 1235,
    population: 1220
},
arrCountry[9] = {
    name: "Italy",
    flag: "Yel",
    code: 112,
    population: 20230
};
arrCountry[10] = {
    name: "France",
    flag: "Bluasd",
    code: 122,
    population: 200345
};
arrCountry[11] = {
    name: "Balg",
    flag: "Red",
    code: 1,
    population: 23450
};

printCountryArr = function (arrCountry, index, currIndex) {
	var strArr = [];
   	strArr[0] = this.arrCountry[index].name;
   	strArr[1] = this.arrCountry[index].flag;
   	strArr[2] = this.arrCountry[index].code; 
   	strArr[3] = this.arrCountry[index].population;
   	return strArr[currIndex];
}  
 
var arrKeys = Object.keys(arrCountry[0]);
var row, cell;	
var table = document.getElementById("tab").appendChild(document.createElement("table"));
var tBody = table.appendChild(document.createElement("tBody"));

for( var i = 0; i < arrCountry.length; i++) {
	row = tBody.appendChild(document.createElement("tr"));

	if( i == 0 ) {
		for (var k = 0; k < arrKeys.length; k++) {
			cell = row.appendChild(document.createElement("th"));
			cell.innerHTML = arrKeys[k];
		}		
	}

	else {
		for (var j = 0; j < 4; j++) {
			cell = row.appendChild(document.createElement("td"));
			cell.innerHTML = printCountryArr(arrCountry, i, j);
		}	
	}
};