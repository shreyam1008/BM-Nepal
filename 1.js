//manupulation of DOM elements of 1.html

//1.a = change class name of a given class to new class of a html
const changeClassName = (elementId, newClassName) => {
  document.getElementById(elementId).className = newClassName;
  const y = document.getElementById("outer");
  console.log(y);
};

//1.b  = Get datasets from dom elements

const getDataSet = () => {
  const data = document.querySelector("#outer");
  //   console.log(data.dataset.type);
};

//1.c  = adding tag to the html
const injectNewElement = (type, content) => {
  const tag = document.createElement(type);
  const text = document.createTextNode(content);
  tag.appendChild(text);
  document.body.appendChild(tag);
};

//1.d = ajax and get request
const ajaxRequest = (url) => {
  $.get(url, (data) => {
    console.log(data);
  });
};

//1.e = get value of a input field
const getValue = (fieldId) => {
  const data = document.getElementById(fieldId).value;
  console.log(data);
};
//set value to the input field
const setValue = (fieldId, data) => {
  document.getElementById(fieldId).value = data;
};

changeClassName("outer", "newerClass");
getDataSet();
injectNewElement("p", "Somethign to write");
ajaxRequest("https://www.boredapi.com/api/activity");
//get and set value to input fields
getValue("name");
setValue("name", "Shreyam");
