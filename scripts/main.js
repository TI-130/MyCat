let myHeading = document.querySelector('h1');
let shownClickAlert = false;
myHeading.textContent = 'Hello world!';


let myButton = document.querySelector('button');

let photoList = ['cat0.jpg','cat1.jpg','cat2.jpg','cat3.jpg','cat4.jpg',
                'cat5.jpg','cat6.jpg','cat7.jpg'];

document.querySelector('img').onclick = function() {
    if (!shownClickAlert) {
        alert('别戳我，嘤嘤嘤。');
        alert('再戳我就不乖了！')
        shownClickAlert = true;
    }
    let myImage = document.querySelector('img');
    let mySrc = myImage.getAttribute('src');
    myImage.setAttribute('src', 'images/' + photoList[Math.floor(Math.random()*photoList.length)]);
    
}

if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    console.log(localStorage.getItem('name'));
    let storedName = localStorage.getItem('name');
    myHeading.textContent = storedName + ',容许我向你介绍一只过于可爱的小猫';
}

// let myImage = document.querySelector('img');

// myImage.onclick = function() {
//     let mySrc = myImage.getAttribute('src');
//     if(mySrc === 'images/cat_test2.png') {
//       myImage.setAttribute('src', 'images/cat_test1.png');
//     } else {
//       myImage.setAttribute('src', 'images/cat_test2.png');
//     }
// }

function setUserName() {
    let myName = prompt('你是谁呀');
    if(!myName || myName === null) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        if (myName === 'Yana' || myName === 'Joy' || myName === '珊珊' ||
        myName === '黄江珊' || myName === '宝贝' || myName === '宝贝老婆' || 
        myName === '老婆') {
            alert('我也觉得，宝贝老婆。');
        } else {
            alert('点点也觉得。');
        }
            myHeading.textContent = 'Mindy酷毙了，对吧 ' + myName;
    }
}

myButton.onclick = function() {
    setUserName();
}

  