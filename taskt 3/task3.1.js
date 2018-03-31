var N = +prompt("Enter N"),
	M = +prompt("Enter M");

var	arrNames = new Array(N),
	arrAges = new Array(N),
	arrCities = new Array(M);
	arrHumans = new Array(N);

for (var i = 0; i < N; i++) {
	arrNames[i] = prompt("Enter arrNames[" + i + "]");
}

for (var i = 0; i < M; i++) {
	arrCities[i] = prompt("Enter arrCities[" + i + "]");
}

for (var i = 0; i < N; i++) {
	arrAges[i] =  Math.round(Math.random() * 100);
}

function Human(name, city, age){ //конструктор объекта human
    this.name = name;
    this.city = city;
    this.age = age;

    this.printHuman = function () {
   		document.write(this.name + "-" + this.city + "-" + this.age + ";<br \/>");
    } 
    
} 

function makeArrHumans(){ //функция создания массива объектов human
	if (N <= M){
		for (var i = 0; i < N; i++) {
			arrHumans[i] = new Human(arrNames[i], arrCities[i], arrAges[i]);
		} 
	} 

	if (N > M){
		var diff = N - M;
		for (var i = 0; i < M; i++) {
			arrHumans[i] = new Human(arrNames[i], arrCities[i], arrAges[i]);
		} 
		for (var i = M; i < N; i++) {
			arrHumans[i] = new Human(arrNames[i], arrCities[i-diff], arrAges[i]);
		} 
	} 
	return arrHumans;
}

 document.write("N = " + N + " ; <br \/>");
 document.write("M =" + M + " ; <br \/>");
 document.write("arrNames = " + arrNames + " ; <br \/>");
 document.write("arrCities =" + arrCities + " ; <br \/>");
 document.write("arrAges =" + arrAges + " ; <br \/>");
 document.write("Humans before sort method <br \/>");

 arrHumans = makeArrHumans(); //задаем рондомный массив людей

 arrHumans.forEach(function(e){ //выводим на экран отсортированный по возрасту массив людей
 	e.printHuman();
 })

 arrHumans.sort( function(a,b){ //сортируем по возрасту людей
 	return b.age - a.age;
 })

 document.write("Humans after sort method <br \/>");
 arrHumans.forEach(function(e){ //выводим на экран отсортированный по возрасту массив людей
 	e.printHuman();
 })



