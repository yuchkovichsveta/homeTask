
function Person(name, age) {
	this.name = name;
	this.age = age;
}

function Flat(square, stair, arrPerson) {
	this.square = square;
	this.stair = stair;
	this.arrPerson = arrPerson;
}

function Home(arrFlat) {
	this.arrFlat = arrFlat;
}

function setArrFlat(flat) {
	var arrFlat = [flat, flat, flat];
	return arrFlat;
}

function setArrPerson([]) {
	var arrPerson = [person, person, person];
	return arrPerson;
}

var N = 10;
var person1 = new Person("Vasya", 29);
    person2 = new Person("Petya", 12);
    person3 = new Person("Alex", 55); 
    person4 = new Person("Sonya", 32);
    person5 = new Person("Tanya", 45);
var personArr = [person1, person2, person3]
var home = new Home([flat]);
var flat = new Object;

var arrFlat = setArrFlat(flat);
var home = new Home(arrFlat);

