
function Employee(name, age, department, salary, experience) { //конструктор объекта 
    this.name = name;
    this.age = age;
    this.department = department;
    this.salary = salary;
    this.experience = experience;

    this.printEmployee = function () {
   		document.write("Employee: " + this.name +"-"+ this.age + "-" + 
   			this.department + "-" + this.salary + "-" + this.experience + ";<br \/>");
    }   
} 

function CountingRoom() {// конструктор
	this.arrEmployee = new Array(0);

	this.setNewEmplyee = function (employee) {
		this.arrEmployee.push(employee);

		return this.arrEmployee;
	}
	
	this.deleteEmplyee = function(name) { //не работает пока что
		var arrEmployeeNew = [];

		for (var i = 0; i < this.arrEmployee.length; i++) {
			if (this.arrEmployee[i].name != name) {
				arrEmployeeNew[i] = this.arrEmployee[i];
			}
			
		}

		document.write("<br \/> arrEmployee after removing Alex <br \/>")
		arrEmployeeNew.forEach(function(elem){ 
			document.write(elem.printEmployee() + "<br \/>");
		}) 

		return arrEmployeeNew;
	}
	
	this.sortBySalary = function () { // сортирует по зарплате
		this.arrEmployee.sort(function(a, b) {
			return a.salary > b.salary ? 1: -1;
	    })
    }

    this.sumSalary = function (){ // суммирует зарплату
		var result = this.arrEmployee.reduce(function(prev, curr) { 
		 	return prev.salary + curr.salary; //суммирует только первых 2, остальные undef
	    })
	    return result;
    }
    
    this.sumSalaryByForCircle = function () { // суммирует зарплату
	    var result = 0;  //следующий код работает

	    for (var i = 0; i < this.arrEmployee.length; i++) {
	    	result += this.arrEmployee[i].salary;
	    }
	    return result;
    }

    this.findMaxMinAverageSalary = function () { 
    	var min = this.arrEmployee[0].salary;
 		var max = min;
 		var result = 0, average = 0;
 		var minIndex = 0,
 		    maxIndex = 0;

 		for (i = 1; i < this.arrEmployee.length; i++) {
     		 if (this.arrEmployee[i].salary > max) {
     		 	max = this.arrEmployee[i].salary;
     		 	maxIndex = i;
     		 } 
     		 if (this.arrEmployee[i].salary < min) {
     		 	min = this.arrEmployee[i].salary;
     		 	minIndex = i;
     		 }
     		 result += this.arrEmployee[i].salary;
	    }

        average = result / this.arrEmployee.length;
		
		document.write("Min salary = " + min + "; Max salary = " 
			+ max + "; Average salary = " + average + "<br \/>");

        document.write("Min salary has " + this.arrEmployee[minIndex].name + 
        	" ; Max salary has " + this.arrEmployee[maxIndex].name);
	    return min;
    }

}

var employee = new Employee("Alex", 24, "accounDep1", 123, 12);
var employee1 = new Employee("Tanya", 45, "salaryDep2", 423, 12);
var countingRoom = new CountingRoom();

var arrInfoEmployee = [];
	arrInfoEmployee[0] = prompt("Enter name ");
	arrInfoEmployee[1] = +prompt("Enter age ");
	arrInfoEmployee[2] = prompt("Enter department ");
	arrInfoEmployee[3] = +prompt("Enter salary ");
	arrInfoEmployee[4] = +prompt("Enter working period ");

var employee2 = new Employee(arrInfoEmployee[0], +arrInfoEmployee[1], arrInfoEmployee[2],
   +arrInfoEmployee[3], +arrInfoEmployee[4]);

countingRoom.setNewEmplyee(employee);
countingRoom.setNewEmplyee(employee1);
countingRoom.setNewEmplyee(employee2);

document.write("Setting arrEmployee: <br \/>");

for (var i = 0; i < countingRoom.arrEmployee.length; i++) {
	countingRoom.arrEmployee[i].printEmployee();
}

document.write("arrEmployee after sort method: <br \/>");

countingRoom.sortBySalary(); //сортируем по зарплате

for (var i = 0; i < countingRoom.arrEmployee.length; i++) {
	countingRoom.arrEmployee[i].printEmployee();
}

document.write("sumSalary by reduce method: <br \/>" + 
    countingRoom.sumSalary() + "<br \/>"); // пока не корректно суммирует

document.write("sumSalary by for cycle: <br \/>" + countingRoom.sumSalaryByForCircle() + "<br \/>");

countingRoom.findMaxMinAverageSalary(); //ищем мин, макс и среднюю зп*/

countingRoom.deleteEmplyee("Alex"); //удаляем работника с именем Алекс
