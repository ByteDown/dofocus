window.onload = function() {
  storeInputValue();
};

var storeInputValue = function() {
  var input = document.getElementById("userInput");
  input.onkeypress = function() {
    if(event.keyCode === 13) {
      var inputValue = input.value;
      deleteInputText();
      createNewInputs(inputValue);
    }
  };
};

var deleteInputText = function() {
  document.getElementById("userInput").remove();
};

var createNewInputs = function(inputValue) {
  var inputContainer = document.createElement("div");
  inputContainer.setAttribute("id", "userInputContainer");
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
    inputContainer.appendChild(input);
  }
  document.body.appendChild(inputContainer);
  storeOnClickValue(inputValue);
};

var storeOnClickValue = function(firstInput) {
  var userInputs = document.getElementsByClassName("userInputs");
  for (var i = 0; i < userInputs.length; i++) {
    var userInput = userInputs[i];
    userInput.onclick = function() {
      var secondInput = event.currentTarget.innerHTML;
      deleteSecondInput();
      appendNewInputs(firstInput, secondInput);
    }
  }
};

var deleteSecondInput = function() {
  var inputContainer = document.getElementById("userInputContainer");
  inputContainer.remove();
};

var appendNewInputs = function(firstInput, secondInput) {
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
};
