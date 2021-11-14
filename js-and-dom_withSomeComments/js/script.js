
//selected
let roundButton = document.getElementById('roundButton');

// listen,
// on which element (button)
// to listen for what event ("click")
// and do what if event takes place (call roundButtonClicked function)
roundButton.addEventListener('click', roundButtonClicked);

function roundButtonClicked() {

  // select
  let rectElem = document.getElementById('rect');
  // mannipiulate its borderRadius
  rectElem.style.borderRadius = '50px';

  
}





let squareButton = document.getElementById('squareButton');

squareButton.addEventListener('click', squareButtonClicked);

function squareButtonClicked() {


  let rectElem = document.getElementById('rect');

  rectElem.style.borderRadius = '0px';

}




let i = 0;
i = i + 2;

console.log('My JavaScript file has loaded');
console.log('i is ' + i);




function say(what) {
  //alert(what);

  // Step 1: find the element we want to manipulate
  let elem = document.getElementById('lyrics');

  // Step 2: create a new element to be added to the DOM
  let newElem = document.createElement('p');

  // Step 2.5: change the element's content
  newElem.innerHTML = what;

  // Step 3: add the new element to our lyrics div
  elem.appendChild(newElem);



  elem = document.getElementById('heading');

  if (what == 'Harder') {
    // we can't say background-color, instead we use:
    elem.style.backgroundColor = 'rgb(124, 12, 12)';
  } else {
    elem.style.backgroundColor = 'blue';

  }
}
