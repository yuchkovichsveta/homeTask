        function getInputValue(eleName) {
            return document.getElementById(eleName).value;
        }

        function clearDisplay(value) {
            document.getElementById("idCalcul").value = value;
        }


        function calculatorEvaluate() {
            try {
                var dispValue = eval(getInputValue("idCalcul").toString());
                if (dispValue.toString().indexOf("Infinity") !== -1)
                    dispValue = "Error";
                document.getElementById("idCalcul").value = dispValue.toString();

            } catch (e) {
                document.getElementById("idCalcul").value = "Error";
            }
        }

        function trigonometry(operation){
            try {

                var dispValue;
                 switch (operation) {
                     case 'sin':
                         return   dispValue = clearDisplay(Math.sin(getInputValue("idCalcul")));
                     case 'cos':
                          return dispValue = clearDisplay(Math.cos(getInputValue("idCalcul"))); 
                     case 'tan':
                          return  dispValue = clearDisplay(Math.tan(getInputValue("idCalcul"))); 
                     case 'asin':
                          return  dispValue = clearDisplay(Math.asin(getInputValue("idCalcul"))); 
                     case 'acos':
                          return  dispValue = clearDisplay(Math.acos(getInputValue("idCalcul"))); 
                     case 'atan':
                          return  dispValue = clearDisplay(Math.atan(getInputValue("idCalcul"))); 
                     
                 }

                if (dispValue.toString().indexOf("Infinity") == -1)
                    dispValue = "Error";
                    
                   

            } catch (e) {
                document.getElementById("idCalcul").value = "Error";
            }

        }

        function getPow(operation){
            try {
                var dispValue;
                 switch (operation) {
                     case '2' : 
                          return  dispValue = clearDisplay(Math.pow(getInputValue("idCalcul"),2))  ;
                     case '3' : 
                          return  dispValue = clearDisplay(Math.pow(getInputValue("idCalcul"),3))  ;
                     case '1/2' : 
                          return  dispValue = clearDisplay(Math.pow(getInputValue("idCalcul"),0.5));
                     case '-1' : 
                          return  dispValue = clearDisplay(Math.pow(getInputValue("idCalcul"),-1));

                 }

                if (dispValue.toString().indexOf("Infinity") == -1)
                    dispValue = "Error";
                document.getElementById("idCalcul").value = "+0";//dispValue.toString();

            } catch (e) {
                document.getElementById("idCalcul").value = "Error";
            }
        }

        function basePow(){
            if (checkForError())
                return;
            document.getElementById("basePow").value = getInputValue("idCalcul");
            clearDisplay("0");

        }
        
         function exponentPow(){
            if (checkForError()) return;
            var base = document.getElementById("basePow").value;
            var exponent = getInputValue("idCalcul");
            var resultPow = Math.pow(base,exponent);
            clearDisplay(resultPow);

        }
        
        function baseLog(){
            if (checkForError())  return;
            document.getElementById("baseLog").value = getInputValue("idCalcul");
            clearDisplay("0");

        }

        function getAnyLog(){
            if (checkForError()) return;
            var base = document.getElementById("baseLog").value;
            var number = getInputValue("idCalcul");
            clearDisplay(Math.log(number)/Math.log(base));
            //return Math.log(number) / Math.log(base);
        };
 
        function getConst(constNumber){
            try {
                var dispValue;
                 switch (constNumber) {
                    case 'Pi' : 
                          return  dispValue = clearDisplay(Math.PI);
                    case 'E' : 
                          return  dispValue = clearDisplay(Math.E);
                    case 'lnE' : 
                          return  dispValue = clearDisplay(1);//clearDisplay(Math.pow(getInputValue("idCalcul"),1));
                    case 'log2E' : 
                          return  dispValue = clearDisplay(Math.LOG2E);
                    case 'logE10' : 
                          return  dispValue = clearDisplay(Math.LN10);

                 }

                if (dispValue.toString().indexOf("Infinity") == -1)
                    dispValue = "Error";
                document.getElementById("idCalcul").value = "+0";//dispValue.toString();

            } catch (e) {
                document.getElementById("idCalcul").value = "Error";
            }
        }

        function checkForError() {
            var currentValue = getInputValue("idCalcul");
            if (currentValue.toString().indexOf("Error") === -1)
                return false;//ошибки нет
            return true;
        }

        function backSpace() {
            if (checkForError())
                return;
            var currentValue = getInputValue("idCalcul");
            if (currentValue.length === 1)
                clearDisplay("0");
            else
                clearDisplay(currentValue.substr(0, currentValue.length - 1));
        }

        function valueof(val) {
            if (checkForError())//если ошибка, то выходим из метода
                return;
            var currentValue = document.getElementById("idCalcul").value;
            if (currentValue === "0")
                clearDisplay(val);
            else {
                currentValue = currentValue.toString() + val.toString();
                clearDisplay(currentValue);
            }
        }

        function memoryRecall() {
            if (checkForError())
                return;
            var memory = document.getElementById("calcMemory").value;
            if (memory.length === 0)
                return;
            clearDisplay(memory);
        }

        function saveToMemory() {
            if (checkForError())
                return;
            document.getElementById("calcMemory").value = getInputValue("idCalcul");
        }

     
      function from10to2Change(){
         if (checkForError()) return;
         var numDec = +getInputValue("idCalcul");; // десятичное число
         //console.log(numDec);
         var decimal = numDec.toString(2);
        // console.log(decimal);
         clearDisplay(decimal); // двоичное представление*/
      }

    function from2to10Change(){
         if (checkForError()) return;
         clearDisplay(parseInt (getInputValue("idCalcul"), 2)); // двоичное представление*/
      }

    function from10to8Change(){
         if (checkForError()) return;
         var numDec = +getInputValue("idCalcul");; // десятичное число
         //console.log(numDec);
         var decimal = numDec.toString(8);
        // console.log(decimal);
         clearDisplay(decimal); // двоичное представление*/
      }

    function from8to10Change(){
         if (checkForError()) return;
         clearDisplay(parseInt (getInputValue("idCalcul"), 16)); // двоичное представление*/
      }

