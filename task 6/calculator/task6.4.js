        function getInputValue(eleName) {
            return document.getElementById(eleName).value;
        }

        function clearDisplay(value) {
            document.getElementById("idCalcul").value = value;
        }

        function calculatorEvaluate() {
            try {
                var dispValue = eval(getInputValue("idCalcul"));
                if (dispValue.toString().indexOf("Infinity") !== -1)
                    dispValue = "Error";
                document.getElementById("idCalcul").value = dispValue.toString();

            } catch (e) {
                document.getElementById("idCalcul").value = "Error";
            }
        }

        function checkForError() {
            var currentValue = getInputValue("idCalcul");
            if (currentValue.toString().indexOf("Error") === -1)
                return false;
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
            if (checkForError())
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

     
      