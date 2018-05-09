var div = document.getElementById("idDiv");

class Task {
    constructor(name, priority, endDate) {
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

    addTaskArr(x, ...arr){
      var newtaskPlan = this.taskPlan;
      newtaskPlan = this.taskPlan.push(x); 
      for (var i = 0; i < arr.length; i++) {
        newtaskPlan = this.taskPlan.push(arr[i]); 
        //console.log("111");
      }
       return newtaskPlan;
    }

     addTaskArr(...arrTask){
      console.log(`Added ${arrTask.length} tasks.`);
     
      for(var i = 0; i < arrTask.length; i++){
          this.taskPlan.push(arrTask[i]);
          console.log(arrTask[i]);
         
      }
    
   }
     deleteTask(taskIndex) {
        var newtaskPlan = this.taskPlan.splice(taskIndex, 1);
        return  this.taskPlan;
    }

     printTaskPlan() { 
       document.write("<b>name|</b> " + " <b> priority| </b>" + " <b> endDate </b> <br></br> ");     
       for (var i = 0; i < this.taskPlan.length; i++) {
         document.write(`${this.taskPlan[i].name} | ${this.taskPlan[i].priority} | ${this.taskPlan[i].endDate} <br></br>`);
        
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

      getTasksForTodayUsingIterator(){
         var now = new Date();
         var iter = this.taskPlan[Symbol.iterator]();
         document.write("<b>name|</b> " + " <b> priority| </b>" + " <b> endDate </b> "+ " | iter.next.done <br></br> ");  
         for (var i = 0; i < this.taskPlan.length; i++) {
            if(now.getDate() ==  this.taskPlan[i].endDate.getDate() ){
                 document.write(this.taskPlan[i].name + " | " + this.taskPlan[i].priority + " | " + this.taskPlan[i].endDate + iter.next().done + "<br></br>");
            }
         } 
        
         console.log(iter.next());
      }

      getTasksForTommorowUsingIterator(){
        var tommorow = new Date();
         var iter = this.taskPlan[Symbol.iterator]();
        tommorow.setTime(tommorow.getTime()+1000*60*60*24);
        document.write("<b>name|</b> " + " <b> priority |</b>" + " <b> endDate </b> "+ " | iter.next.done <br></br> ");  
        for (var i = 0; i < this.taskPlan.length; i++) {
            if(tommorow.getDate() ==  this.taskPlan[i].endDate.getDate()){
              document.write(this.taskPlan[i].name + " | " + this.taskPlan[i].priority + " | " + this.taskPlan[i].endDate  + iter.next().done + "<br></br>");
            
         }
       } 
    }
       
}

class TaskList {

    constructor(...taskList) {
        this.taskList = taskList;
    }

    addTaskToList(task){
        this.taskList.push(task); 
    }
  
   addArrTaskToList(...arrTask){
      console.log(`Added ${arrTask.length} tasks`);
     
      for(var i = 0; i < arrTask.length; i++) {
          this.taskList.push(arrTask[i]);
          console.log(arrTask[i]);
         
      }
    
  }

  printTaskList() { 
    document.write("<b>name|</b> " + " <b> priority| </b>" + " <b> endDate </b> <br></br> ");     
      for (var i = 0; i < this.taskList.length; i++) {
        document.write(`${this.taskList[i].name} | ${this.taskList[i].priority} | ${this.taskList[i].endDate} <br></br>`);
        
      } 
  }

  deleteTaskInList(task) {
    document.write(`${task.name} deleted`);  
    this.taskList.splice(task, 1);
  }
}

function ajaxGet(path) {
  var promise = new Promise(function(resolve, reject) {
    var xhr = new XMLHttpRequest; 
    xhr.open("GET", path, true);

    xhr.onload = function() { 
      resolve(xhr.responseText); 
    } 

    xhr.onerror = function() {
      reject(xhr.responseText);
    }

    xhr.send(null); 
  })
  return promise;
}

ajaxGet("1.json").then(function(text) { 
  var data = JSON.parse(text);
  console.log(data.length);
  var list = new Set();
  var plan = new Set();

  for(var i = 0; i < data.length; i++) {
    var task = new Task(data[i].name,data[i].priority,data[i].endDate);

    if(data[i].endDate == null) {
      list.add(task);
    }

    else {
      plan.add(task);
    }
  }

  
  
  taskPlan.addTaskArr(...plan);
  document.write("Testing of Set (task 1.5) <b> taskPlan </b> with exact endDate in 1.json (task 1.7) <br></br> ");    
  console.log(taskPlan);
  taskPlan.printTaskPlan();

  document.write("Testing of Set (task 1.5) <b> taskList </b> without exact endDate in 1.json (task 1.7) <br></br> ");       

  taskList.addArrTaskToList(...list);
  console.log( taskList);
  taskList.printTaskList();
  
  
},err=>console.error(err));

var taskList = new TaskList();
var taskPlan = new TaskPlan();

var now = new Date();
var tommorow = new Date();
tommorow.setTime(tommorow.getTime()+1000*60*60*24);

/*var task1 = new Task("task1", 1, new Date(now.getFullYear(), now.getMonth(), now.getDate()));
//console.log(task1);
var task2 = new Task("task2", 4, new Date(now.getFullYear(), now.getMonth(), now.getDate()));
var task3 = new Task("task3", 2, new Date(tommorow.getFullYear(), tommorow.getMonth(), tommorow.getDate()));
//console.log(task3);
var task4 = new Task("task4", 3, new Date(tommorow.getFullYear(), tommorow.getMonth(), tommorow.getDate()));
//console.log(task4);
var task5 = new Task("task5", 1, new Date(now.getFullYear(), now.getMonth(), now.getDate()));
var task6 = new Task("task6", 2, new Date(tommorow.getFullYear(), tommorow.getMonth(), tommorow.getDate()));

var arr = new Array(task1, task2, task3, task4, task6);
var arr1 = [task3, task2];*/
var arr = [];
var taskPlan = new TaskPlan(arr);
var taskPlan2 = new TaskPlan(arr);

document.write("Initial taskPlan: <br></br> ");

//taskPlan.printTaskPlan();

document.write("taskPlan after addition of task5: <br></br> ");

taskPlan.addTask(task5);
//taskPlan.printTaskPlan();

document.write("taskPlan after sort by priority: <br></br> ");
taskPlan.getListByPriority();
//taskPlan.printTaskPlan();

document.write("taskPlan after deleted task with index = 2 : <br></br> ");
taskPlan.deleteTask(2);
//taskPlan.printTaskPlan();

document.write("taskPlan for today: <br></br> ");
taskPlan.getTasksForToday();

document.write("taskPlan for tommorow: <br></br> ");
taskPlan.getTasksForTommorow();

document.write("taskPlan after using SPREAD (x = task2, ...arr = [task3, task2]): <br></br> ");
taskPlan.addTaskArr(task2, ...arr1);
//taskPlan.printTaskPlan();

document.write("taskPlan after using SPREAD (x = task1, ...arr = [task4, task5, task3]): <br></br> ");
var arr1 = [task4, task3, task5];
taskPlan.addTaskArr(...arr1);
//taskPlan.printTaskPlan();

document.write("testing of iterator  <br></br> ");
//taskPlan.getTasksForTodayUsingIterator();

