// let myHeading = document.querySelector('h1');
// myHeading.textContent = 'Hello world!';

// document.querySelector('html').onclick = function() {
//     alert('别戳我，嘤嘤嘤。');
// }
if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla 酷毙了，' + storedName;
  }

let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/cat_test2.png') {
      myImage.setAttribute('src', 'images/cat_test1.png');
    } else {
      myImage.setAttribute('src', 'images/cat_test2.png');
    }
}


let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('请输入你的名字。');
    if(!myName || myName === null) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.textContent = 'Mindy酷毙了，' + myName;
    }
}

myButton.onclick = function() {
    setUserName();
}

  