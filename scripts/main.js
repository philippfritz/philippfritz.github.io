

// adjust content by input
const myHeading = document.querySelector('h1');
//myHeading.textContent = 'CLICK ME!';

// standard function definition
function pokeme() {
    alert('Ouch! Stop poking me!');
}
// arrow function definition
myfunc = () => {
    alert('Ouch! Stop poking me!');
}

// alarm on click on H1
let myH1 = document.querySelector('h1')
myH1.addEventListener('click', myfunc);

// adjust image by click 
const myImage = document.querySelector('img');
image_change = () => {
    const mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/Pummeluff.png') {
      myImage.setAttribute('src','images/Pummeluff1.png');
    } else {
      myImage.setAttribute('src','images/Pummeluff.png');
    }
}
myImage.addEventListener('click', image_change);

// add greeting based on text input
let myButton = document.querySelector('button');

function setUserName() {
    const myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = `Click Me, ${myName}`;
  }

myButton.onclick = () => {
    setUserName();
  }

if (!localStorage.getItem('name')) {
    setUserName();
  } else {
    const storedName = localStorage.getItem('name');
    myHeading.textContent = `Mozilla is cool, ${storedName}`;
  }

