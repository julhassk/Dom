const submit = document.querySelector("button");
submit.addEventListener("click", alert1);
function alert1() {
  alert(document.querySelector('.inp').value);
}
