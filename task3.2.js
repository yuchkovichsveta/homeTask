
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

	this.setNewOrDeletEmplyee = function (employee) {
		if (typeof(employee) == "object"){
			this.arrEmployee.push(employee);
		 	employee.printEmployee(); 
	        
		}
		
		else { 
			this.arrEmployee = this.arrEmployee.filter(function(elem) { 
				return elem.name != employee; 
			}) 

			document.write("arrEmployee after deleted Alex: <br \/>");

			this.arrEmployee.forEach(function(elem) { 
		 	    elem.printEmployee(); 
	        })

		} 

		return this.arrEmployee;
	}
	
	this.sortBySalary = function () { // сортирует по зарплате
		this.arrEmployee.sort(function(a, b) {
			return a.salary > b.salary ? 1: -1;
	    })

	    var result = 0
		 this.arrEmployee.forEach(function(employee) { 
		 	return result += employee.salary; //суммирует 
	    })
        
        document.write("arrEmployee after sort method: <br \/>");

        this.arrEmployee.forEach(function(elem) { 
		 	elem.printEmployee(); 
	    })

        document.write("sum of Salary = " + result + "<br \/>");

	    return this.arrEmployee;
    }


    this.findMaxMinAverageSalary = function () { 
    	var min = this.arrEmployee[0].salary;
 		var max = min;
 		var result = 0, average = 0;
 		var minIndex = 0,
 		    maxIndex = 0;

 		for (var i = 0; i < this.arrEmployee.length; i++) {
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

        document.write(this.arrEmployee[minIndex].printEmployee() + " has min Salary <br \/>");
        document.write(this.arrEmployee[maxIndex].printEmployee() + "has max Salary <br \/>");

	    return min;
    }

    this.showDepartmentInfo = function () { // суммирует зарплату
	  
		document.write("arrEmployee after sorting by department <br \/>");

	    this.arrEmployee.sort(function(a, b) {
			return a.department > b.department ? 1: -1;
	    })

	     this.arrEmployee.forEach(function(elem) { 
		 	elem.printEmployee(); 
	    })

	    document.write("<br \/>Testing departmentInfo method: <br \/>")
 	 
	    var totalSalary = this.arrEmployee[0].salary, //следующий код работает
	        totalEmployee = 1,
	        averSalary = this.arrEmployee[0].salary / totalEmployee,
	        totalAge = this.arrEmployee[0].age,
	        averAge = this.arrEmployee[0].age / totalEmployee,
	        longExperience = this.arrEmployee[0].experience;
 
 		for (var i = 1; i < this.arrEmployee.length; i++) {
 			
 			 var current = this.arrEmployee[0].department;
     		 if (current == this.arrEmployee[i].department) {
     		 	totalSalary += this.arrEmployee[i].salary;
     		 	totalAge += this.arrEmployee[i].age;
     		 	totalEmployee += 1;
     		 	current = this.arrEmployee[i].department;
     		 	if (longExperience <this.arrEmployee[i].experience) {
     		 		longExperience = this.arrEmployee[i].experience;
     		 	}
     		 } 
     		 else {
     		 	averAge = totalAge / totalEmployee;
     		 	averSalary = totalSalary / totalEmployee; 
     		    document.write("department info: " + current + " totalSalary " +
     		 		totalSalary + " averSalary "+ averSalary + " totalEmployee "+ totalEmployee + 
     		 		" averAge " + averAge + " longExperience " + longExperience +" <br \/>");
     		    totalEmployee = 1;
     		    
     		    totalSalary = this.arrEmployee[i].salary;
	        	averSalary = this.arrEmployee[i].salary / totalEmployee,
	       		totalAge = this.arrEmployee[i].age,
	        	averAge = this.arrEmployee[i].age / totalEmployee,
     		    current = this.arrEmployee[i].department;
     		    longExperience = this.arrEmployee[i].experience;

     		    document.write("department info: " + current + " totalSalary " +
     		 		totalSalary + " averSalary "+ averSalary + " totalEmployee "+
     		 		totalEmployee + " averAge " + averAge + " longExperience " + longExperience +" <br \/>");
     		 }
     		 
	    }
	   
	    return this.arrEmployee;
	}
	    
}

var employee = new Employee("Alex", 24, "aDep1", 100, 20);
var employee1 = new Employee("Tanya", 45, "bDep2", 200, 40);
var employee2 = new Employee("Sanya", 25, "aDep1", 500, 60);
var countingRoom = new CountingRoom();

var arrInfoEmployee = [];
	arrInfoEmployee[0] = prompt("Enter name ");
	arrInfoEmployee[1] = +prompt("Enter age ");
	arrInfoEmployee[2] = prompt("Enter department ");
	arrInfoEmployee[3] = +prompt("Enter salary ");
	arrInfoEmployee[4] = +prompt("Enter working period ");

var employee3 = new Employee(arrInfoEmployee[0], +arrInfoEmployee[1], arrInfoEmployee[2],
   +arrInfoEmployee[3], +arrInfoEmployee[4]);

document.write("Setting arrEmployee: <br \/>");

countingRoom.setNewOrDeletEmplyee(employee);
countingRoom.setNewOrDeletEmplyee(employee1);
countingRoom.setNewOrDeletEmplyee(employee2);
countingRoom.setNewOrDeletEmplyee(employee3);

document.write("<br \/>");

countingRoom.sortBySalary(); //сортируем по зарплате

document.write("<br \/>");

countingRoom.showDepartmentInfo();

document.write("<br \/>");

countingRoom.setNewOrDeletEmplyee("Alex");

document.write("<br \/>");

countingRoom.findMaxMinAverageSalary(); //ищем мин, макс и среднюю зп


