const controlers = document.querySelector("#form-container");
const cssText = document.querySelector(".css-text");
const btn = document.querySelector("button");

function handleChange(event) {
  const value = event.target.value;
  const name = event.target.name;
  handleStyle[name](value);
  saveValues(name, value);
  showCss();
}

const handleStyle = {
  element: btn,
  text(value) {
    this.element.innerText = value;
  },
  color(value) {
    this.element.style.color = value;
  },
  backgroundColor(value) {
    this.element.style.backgroundColor = value;
  },
  height(value) {
    this.element.style.height = value + "px";
  },
  width(value) {
    this.element.style.width = value + "px";
  },
  border(value) {
    this.element.style.border = value;
  },
  borderRadius(value) {
    this.element.style.borderRadius = value + "px";
  },
  fontFamily(value) {
    this.element.style.fontFamily = value;
  },
  fontSize(value) {
    this.element.style.fontSize = value + "px";
  },
};

function showCss() {
  cssText.innerHTML =
    "<span>" + btn.style.cssText.split("; ").join(";</span><span>");
}

function saveValues(name, value) {
  localStorage[name] = value;
}

function setValues() {
  const proprieties = Object.keys(localStorage);
  proprieties.forEach((propitie) => {
    handleStyle[propitie](localStorage[propitie]);
    controlers.elements[propitie].value = localStorage[propitie];
  });
  showCss()
}
setValues()

controlers.addEventListener("change", handleChange);
