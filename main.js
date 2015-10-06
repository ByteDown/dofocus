window.onload = function() {
  createFirstInput();
};

var createFirstInput = function() {
  var input = document.createElement("input");
  input.setAttribute("id", "toDo");
  input.setAttribute("autofocus", "autofocus");
  var table = document.getElementsByTagName("table")[0];
  if (table) {
    document.body.insertBefore(input, table);
    storeInputValue();
  }
  else {
    document.body.appendChild(input);
    storeInputValue();
  }
};

var storeInputValue = function() {
  var input = document.getElementById("toDo");
  input.onkeypress = function() {
    if(event.keyCode === 13) {
      var inputValue = input.value;
      deleteInputTag();
      createNewInputs(inputValue);
    }
  };
};

var deleteInputTag = function() {
  document.getElementById("toDo").remove();
};

var createNewInputs = function(inputValue) {
  var inputValueContainer = document.createElement("div");
  var table = document.getElementsByTagName("table")[0];
  inputValueContainer.setAttribute("id", "inputValueContainer");
  for (var i = 0; i < 3; i++) {
    var input = document.createElement("div");
    var p = document.createElement("p");
    input.setAttribute("class", "userInputs");
    p.setAttribute("class", "userInputsText")
    if (i === 0) {
      p.innerHTML = "LV";
      input.setAttribute("id", "darkBlue");
    }
    else if (i === 1) {
      p.innerHTML = "MV";
      input.setAttribute("id", "green");
    }
    else {
      p.innerHTML = "HV";
      input.setAttribute("id", "red");
    }
    input.appendChild(p);
    inputValueContainer.appendChild(input);
  }
  if (table) {
    document.body.insertBefore(inputValueContainer, table);
    storeOnClickValue(inputValue);
  }
  else {
    document.body.appendChild(inputValueContainer);
    storeOnClickValue(inputValue);
  }
};

var storeOnClickValue = function(firstInput) {
  var userInputs = document.getElementsByClassName("userInputs");
  for (var i = 0; i < userInputs.length; i++) {
    var userInput = userInputs[i];
    userInput.onclick = function() {
      var secondInput = event.currentTarget.lastChild.innerHTML;
        deleteSecondInput(firstInput, secondInput);
    }
  }
};

var deleteSecondInput = function(firstInput, secondInput) {
  var inputValueContainer = document.getElementById("inputValueContainer");
  inputValueContainer.remove();
  appendNewInputs(firstInput, secondInput);
};

var appendNewInputs = function(firstInput, secondInput) {
var tableBody = document.getElementsByTagName("tbody");
var tableRowTags = document.getElementsByTagName("tr");

  if (tableBody.length) {
    var tableRow = document.createElement("tr");
    var tableData1 = document.createElement("td");
    tableData1.setAttribute("class", "tableData1");
    var tableData2 = document.createElement("td");
    tableData2.setAttribute("class", "tableData2");
    
    tableData1.innerHTML = firstInput;
    tableData2.innerHTML = secondInput;
    if (secondInput[0] === "H") {
      tableData2.setAttribute("id", "red");
    }
    else if (secondInput[0] === "M") {
      tableData2.setAttribute("id", "green");
    }
    else {
      tableData2.setAttribute("id", "darkBlue");
    }
    tableRow.appendChild(tableData1);
    tableRow.appendChild(tableData2);
    tableBody[0].appendChild(tableRow);

    if (!(tableRowTags.length >= 5)) {
      createFirstInput();
    }
    else {
      deleteUnimportantTasks();
    }
  }
  else {
    var table = document.createElement("table");
    var tableBody = document.createElement("tbody");
    var tableRow = document.createElement("tr");
    var tableData1 = document.createElement("td");
    tableData1.setAttribute("class", "tableData1");
    var tableData2 = document.createElement("td");
    tableData2.setAttribute("class", "tableData2");
    
    tableData1.innerHTML = firstInput;
    tableData2.innerHTML = secondInput;
    if (secondInput[0] === "H") {
      tableData2.setAttribute("id", "red");
    }
    else if (secondInput[0] === "M") {
      tableData2.setAttribute("id", "green");
    }
    else {
      tableData2.setAttribute("id", "darkBlue");
    }
    tableRow.appendChild(tableData1);
    tableRow.appendChild(tableData2);
    tableBody.appendChild(tableRow);
    table.appendChild(tableBody);
    document.body.appendChild(table);
    createFirstInput();
  }
};

var deleteUnimportantTasks = function() {
  var tableRowTags = document.getElementsByTagName("tr");
  var taskValueArray = [];
  for (var i = 0; i < tableRowTags.length; i++) {
    var taskValue = tableRowTags[i].lastChild.innerHTML;
    if (taskValue[0] !== "H") {
      tableRowTags[i].remove();
      i--;
    }
    else {
      taskValueArray.push(taskValue);
    }
  }
  removeDuplicates(tableRowTags, taskValueArray);
};

var removeDuplicates = function(tableRowTags, taskValueArray) {
  for (var i = 1; i < tableRowTags.length; i++) {
    if (taskValueArray[i - 1] === taskValueArray[i]) {
      taskValueArray.splice(i, 1);
      tableRowTags[i].remove();
      i--;
    }
  }
};