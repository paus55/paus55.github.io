var img = document.querySelector('img');
img.onclick = function() {
  var src = img.getAttribute('src')
  if (src === 'Images/mozaela.jpg') {
    img.setAttribute ('src','Images/patruck.jpg');
  } else { img.setAttribute ('src','Images/mozaela.jpg')
  }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var nama = prompt('sai aran side?');
  localStorage.setItem('aran', nama);
  myHeading.textContent = 'aok aneh,'+ nama;
}

  if (!localStorage.getItem('aran')){
  setUserName();
}
 else {
    var storedAran = localStorage.getItem ('aran');
    myHeading.textContent = 'aok aneh,' + storedAran;
  }
  myButton.onclick = function() {
    setUserName();
  }
