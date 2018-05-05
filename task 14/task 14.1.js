/*function sum(...nums){
  let sum = 0;
  for (let i in nums) {
    sum += nums[i]
  }
 return sum;
}

sum(5,7);
console.log(sum(1,2,3,4,5,6));

//var div = document.getElementById("idDiv");
console.log(sum(5,7));*/



/*
var s1 = Symbol();
var s2 = Symbol();
console.log(s1 == s2);*/

var div = document.getElementById("idDiv");

class Task{
    constructor(name, priority, endDate){
      this.name = name;
      this.priority = priority;
      this.endDate = endDate;
    }
}


class TaskPlan {

    constructor(taskPlan) {
        this.taskPlan = taskPlan;
    }

    addTask(task) {
       var newtaskPlan =  this.taskPlan.push(task);
       return  newtaskPlan;
    }

     deleteTask(taskIndex) {
        var newtaskPlan = this.taskPlan.splice(taskIndex, 1);
        return  this.taskPlan;
    }

     printTaskPlan() {
      
       document.write("<b>name|</b> " + " <b> priority| </b>" + " <b> endDate </b> <br></br> ");    
       for (var i = 0; i < this.taskPlan.length; i++) {
         document.write(this.taskPlan[i].name + " | " + this.taskPlan[i].priority + " | " + this.taskPlan[i].endDate + "<br></br>")
       } 
     }

     getListByPriority(){
        function compareNumeric(a, b) {
           if (a.priority > b.priority) return 1;
           if (a.priority < b.priority) return -1;
        }  

        return this.taskPlan.sort(compareNumeric);   

     }

     getTasksForToday(){
      var now = new Date();
      document.write("<b>name|</b> " + " <b> priority| </b>" + " <b> endDate </b> <br></br> ");  
      for (var i = 0; i < this.taskPlan.length; i++) {
        if(now.getDate() ==  this.taskPlan[i].endDate.getDate() ){
             document.write(this.taskPlan[i].name + " | " + this.taskPlan[i].priority + " | " + this.taskPlan[i].endDate + "<br></br>");
         }
       } 
         
     }

     getTasksForTommorow(){
        var tommorow = new Date();
        tommorow.setTime(tommorow.getTime()+1000*60*60*24);
        document.write("<b>name|</b> " + " <b> priority |</b>" + " <b> endDate </b> <br></br> ");  
        for (var i = 0; i < this.taskPlan.length; i++) {
            if(tommorow.getDate() ==  this.taskPlan[i].endDate.getDate()){
              document.write(this.taskPlan[i].name + " | " + this.taskPlan[i].priority + " | " + this.taskPlan[i].endDate + "<br></br>");
         }
       } 
       } 
}

var now = new Date();
var tommorow = new Date();
tommorow.setTime(tommorow.getTime()+1000*60*60*24);


var task1 = new Task("task1", 1, new Date(now.getFullYear(), now.getMonth(), now.getDate()));
console.log(task1);
var task2 = new Task("task2", 4, new Date(now.getFullYear(), now.getMonth(), now.getDate()));
var task3 = new Task("task3", 2, new Date(tommorow.getFullYear(), tommorow.getMonth(), tommorow.getDate()));
console.log(task3);
var task4 = new Task("task4", 3, new Date(tommorow.getFullYear(), tommorow.getMonth(), tommorow.getDate()));
console.log(task4);
var task5 = new Task("task5", 1, new Date(now.getFullYear(), now.getMonth(), now.getDate()));
var task6 = new Task("task6", 2, new Date(tommorow.getFullYear(), tommorow.getMonth(), tommorow.getDate()));

var arr = new Array(task1, task2, task3, task4, task6);
var taskPlan = new TaskPlan(arr);
var taskPlan2 = new TaskPlan(arr);


 document.write("Initial taskPlan: <br></br> ");

taskPlan2.printTaskPlan();

document.write("taskPlan after addition of task5: <br></br> ");

taskPlan.addTask(task5);
taskPlan.printTaskPlan();

document.write("taskPlan after sort by priority: <br></br> ");
taskPlan.getListByPriority();
taskPlan.printTaskPlan();

document.write("taskPlan after deleted task with index = 2 : <br></br> ");
taskPlan.deleteTask(2);
taskPlan.printTaskPlan();

document.write("taskPlan for today: <br></br> ");
taskPlan.getTasksForToday();

document.write("taskPlan for tommorow: <br></br> ");
taskPlan.getTasksForTommorow();
//taskPlan.printTaskPlan();






/*
class Human{
  constructor(name, age){
    this.name = name;
    this.age = age;
  }
  sayHi(){
    console.log(`Hi Its ${this.name}`);
  }
}

var alex = new Human("Alex", 22);
alex.sayHi();*/






/*
var arr = [1,3, false, "sfsdf"];
var iter = arr[Symbol.iterator]();

console.log(iter.next());
console.log(iter.next());

console.log(iter.next());*/



/*
var Fibonachi = {
  max : 1000,
  [Symbol.iterator](){
    var self = this;
    var a = 0, b = 1;
    var iter = {
      next() {

        let value = a + b;
        b = a;
        a = value;
        let done = value > self.max;
        return {value, done};
      }
    }
    return iter;
  }
}

for (var num of Fibonachi){
  console.log(num);
}
*/





/*
function * generator(){
  yield 1;
  console.log(1);
  yield 3;
  console.log(3);
  yield 6;
  console.log(6);
  return;
}

var iter = generator();
for (var o of iter) {
  console.log(o);
}*/

/*
function * generator(n){
  var max = n;
  var a = 1, b = 0;
  var value = 1;
  while(value < max) {
    yield value;
    var tmp = value;
    value = a+b;
    b = a;
    a = tmp;
  }
}


var iter = generator(1000);
for (var o of iter) {
  console.log(o);
}*/