//var n = 100;
/*
var n = +prompt("Enter Number n", 100);



var eratosthenes = function(n) {
	var row, cell;	
	var table = document.getElementById("tab").appendChild(document.createElement("table"));
	var tBody = table.appendChild(document.createElement("tBody"));
    // Eratosthenes algorithm to find all primes under n
    var array = [], upperLimit = Math.sqrt(n), output = [];

    // Make an array from 1 to n
    for (var i = 1; i < n; i++) {
        row = tBody.appendChild(document.createElement("tr"));
		for( var j = 0; j < n/10; j++) {
			array.push(true);
			cell = row.appendChild(document.createElement("td"));
			cell.innerHTML = i++;
		}
		--i;	

    }

    // Remove multiples of primes starting from 2, 3, 5,...
    for (var i = 2; i <= upperLimit; i++) {
        if (array[i]) {
            for (var j = i * i; j < n; j += i) {
                array[j] = false;
                //table.row[i].cell[j].style.color = red;
            }
        }

    }

    // All array[i] set to true are primes
    for (var i = 2; i < n; i++) {
        if(array[i]) {
            output.push(i);
        }
    }

    return output;
};

var div = document.getElementById("tab").appendChild(document.createElement("div"));
div.innerHTML = "prime numbers: <br>" + eratosthenes(n);
*/


var eras= function(){
	var N= +prompt('До какого числа выводить решето Эрастофена?');
	var table= document.getElementById("table");
	var tr= document.createElement("tr");
	var td= document.createElement("td");
	var z=N;
	var q=1;
	N= Math.ceil(Math.sqrt(N));

	for( let i=0; i<N ; i++)
	{ 
			if(q>z){
				break;
			}
		table.appendChild(tr.cloneNode());
		for( let j=0; j<N; j++){
			if(q<=z){
				table.lastElementChild.appendChild(td.cloneNode());
				table.lastElementChild.lastElementChild.innerText=q;
				q++;
			}
			else{
				break;
			}
		
		}
	}

	var arg= table.firstElementChild;
	var arg3= arg.firstElementChild.nextElementSibling;
	var arg2= arg3.nextElementSibling;

	table.setAttribute("style", "border-style: solid; border-color: #AAAAAA; width: 50vw; height: 50vh; margin: auto; font-size: 20px; text-align: center");
	table.firstElementChild.firstElementChild.setAttribute("style","color: red; background-color: #BBBBBB;text-decoration: line-through ");
		var e= setInterval(function(){
			
			console.log(Number(arg2.innerText))

			if((Number(arg2.innerText)) % (Number(arg3.innerText)) == 0 && (Number(arg2.innerText)) != (Number(arg3.innerText))){
				arg2.setAttribute("style","color: red; background-color: #BBBBBB; text-decoration: line-through ")
			}

			if(arg2.nextElementSibling != null){
				arg2= arg2.nextElementSibling;
			}

			else if(arg.nextElementSibling != null){
				arg= arg.nextElementSibling;
				arg2= arg.firstElementChild;
			}

			else if(arg3.nextElementSibling != null){
				arg= table.firstElementChild;
					arg3= arg3.nextElementSibling;
				arg2= arg3;

			}
			else{
				var finish= document.getElementById("finish");
				finish.innerText="Finish!";
				finish.setAttribute("style", "margin: auto; font-size: 40px; text-align: center");
				clearInterval(e);
			}

		},150);
}

eras();