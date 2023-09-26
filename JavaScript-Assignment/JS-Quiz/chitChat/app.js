// function formSubmission() {

//   var userName = document.getElementById("userName").value;
//   var signup = document.getElementById("signup-container");
//   var container = document.getElementById("container");

//   signup.style.display = "none";

//   container.style.display = "block";

//   var displayName = document.getElementById("displayName");

//   displayName.innerHTML = "@" + userName;
// }

function submit() {
  var posting = document.getElementById("posting");
  var output = document.getElementById("output");

  var newPara = document.createElement("p");
  newPara.textContent = posting.value;

  output.appendChild(newPara);

  posting.value = "";

  console.log(posting);
}
