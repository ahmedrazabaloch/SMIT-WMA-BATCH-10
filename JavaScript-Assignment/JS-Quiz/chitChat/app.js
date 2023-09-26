function formSubmission() {
  var userName = document.getElementById("userName").value;
  var signup = document.getElementById("signup-container");
  var container = document.getElementById("container");
  signup.style.display = "none";
  container.style.display = "block";
  var displayName = document.getElementById("displayName");
  displayName.innerHTML = userName;
}

// function submit() {
//   var para = document.getElementById("para");
//   var posting = document.getElementById("posting");
//   para.innerHTML = posting.value;
//   posting.value = "";
//   console.log(posting);
//   console.log(para);
// }
