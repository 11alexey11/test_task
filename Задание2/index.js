function main () {
  const panelsElements = document.querySelector('.wrapper');
  const panel = new Panel();
  panel.clickMe();
}

window.onload = main;

class Panel {
  constructor() {

  }

  clickMe(){
    document.addEventListener('click', function(event) {
      if (event.target.dataset.counter != undefined) { // если есть атрибут...
        event.target.dataset.value++;
        const value = event.target.dataset.value;
      if (event.target.className === "red") {
        document.getElementsByClassName('red-counter')[0].innerHTML = value;
      } else if (event.target.className === "green") {
        document.getElementsByClassName('green-counter')[0].innerHTML = value;
      } else {
        document.getElementsByClassName('blue-counter')[0].innerHTML = value;
      }
    }}
    );
  }
}