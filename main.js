window.onload = function() {
  createFirstInput();
};

var createFirstInput = function() {
  var input = document.createElement("input");
  input.setAttribute("id", "toDo");
  input.setAttribute("autofocus", "autofocus");
  var container = document.getElementById("container");
  if (container) {
    document.body.insertBefore(input, container);
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
  var container = document.getElementById("container");
  inputValueContainer.setAttribute("id", "inputValueContainer");
  for (var i = 0; i < 3; i++) {
    var input = document.createElement("div");
    input.setAttribute("class", "userInputs");
    if (i === 0) {
      input.innerHTML = "Low Value";
    }
    else if (i === 1) {
      input.innerHTML = "Moderate Value";
    }
    else {
      input.innerHTML = "High Value";
    }
    inputValueContainer.appendChild(input);
  }
  if (container) {
    document.body.insertBefore(inputValueContainer, container);
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
      var secondInput = event.currentTarget.innerHTML;
        deleteSecondInput(firstInput, secondInput);
    }
  }
};

var deleteSecondInput = function(firstInput, secondInput) {
  var inputValueContainer = document.getElementById("inputValueContainer");
  inputValueContainer.remove();
  var containerLiTags = document.getElementsByClassName("tasks");
  appendNewInputs(firstInput, secondInput);
};

var appendNewInputs = function(firstInput, secondInput) {
var container = document.getElementById("container");
var containerLiTags = document.getElementsByClassName("tasks");

  if (container) {
    var ul = document.getElementById("taskList");
    var li = document.createElement("li");
    li.setAttribute("class", "tasks");
    li.innerHTML = firstInput + "<span class='taskDifficulty'>" + secondInput + "</span>";
    ul.appendChild(li);
    if (!(containerLiTags.length >= 5)) {
      createFirstInput();
    }
    else {
      deleteUnimportantTasks();
    }
  }
  else {
    var div = document.createElement("div");
    div.setAttribute("id", "container");
    var ul = document.createElement("ul");
    ul.setAttribute("id", "taskList");
    var li = document.createElement("li");
    li.setAttribute("class", "tasks");
    li.innerHTML = firstInput + "<span class='taskDifficulty'>" + secondInput + "</span>";
    ul.appendChild(li);
    div.appendChild(ul);
    document.body.appendChild(div);
    createFirstInput();
  }
};

var deleteUnimportantTasks = function() {
  var containerLiTags = document.getElementsByClassName("tasks");
  for (var i = 0; i < containerLiTags.length; i++) {
    var taskValue = containerLiTags[i].lastChild.innerHTML;
    if (taskValue[0] === "H") {
      console.log("Don't");
    }
    else {
      containerLiTags[i].remove();
      i--;
    }
  }
};
