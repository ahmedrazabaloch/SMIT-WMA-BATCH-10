function submit() {
  var para = document.getElementById("para");
  var posting = document.getElementById("posting");
  para.innerHTML = posting.value;
  posting.value = "";
  console.log(posting);
  console.log(para);
}
